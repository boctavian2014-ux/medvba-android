import * as z from 'zod';
import { createTRPCRouter, publicProcedure } from '../create-context';
import { supabase } from '@/lib/supabase';

const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID || '';
const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID || '';
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET || '';

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

let cachedToken: CachedToken | null = null;

async function getZoomAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    console.log('[Zoom] Using cached access token');
    return cachedToken.accessToken;
  }

  console.log('[Zoom] Requesting new access token...');

  if (!ZOOM_ACCOUNT_ID || !ZOOM_CLIENT_ID || !ZOOM_CLIENT_SECRET) {
    throw new Error('Zoom credentials not configured');
  }

  const credentials = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString('base64');

  const response = await fetch('https://zoom.us/oauth/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'account_credentials',
      account_id: ZOOM_ACCOUNT_ID,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Zoom] OAuth error:', response.status, errorText);
    throw new Error(`Failed to get Zoom access token: ${response.status}`);
  }

  const data = await response.json();

  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  console.log('[Zoom] Access token obtained');
  return data.access_token;
}

async function createZoomMeeting(topic: string) {
  const accessToken = await getZoomAccessToken();

  const meetingBody = {
    topic,
    type: 1,
    settings: {
      join_before_host: true,
      waiting_room: false,
      host_video: true,
      participant_video: true,
      mute_upon_entry: true,
      audio: 'both',
    },
  };

  console.log('[Zoom] Creating meeting:', topic);

  const response = await fetch('https://api.zoom.us/v2/users/me/meetings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meetingBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Zoom] Create meeting error:', response.status, errorText);
    throw new Error(`Failed to create Zoom meeting: ${response.status}`);
  }

  const meeting = await response.json();
  console.log('[Zoom] Meeting created:', meeting.id);

  return {
    id: meeting.id,
    join_url: meeting.join_url,
    start_url: meeting.start_url,
  };
}

async function endZoomMeeting(meetingId: string) {
  const accessToken = await getZoomAccessToken();

  console.log('[Zoom] Ending meeting:', meetingId);

  const response = await fetch(
    `https://api.zoom.us/v2/meetings/${meetingId}/status`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'end' }),
    }
  );

  if (!response.ok && response.status !== 204) {
    const errorText = await response.text();
    console.error('[Zoom] Failed to end meeting:', response.status, errorText);
    throw new Error(`Failed to end Zoom meeting: ${response.status}`);
  }

  console.log('[Zoom] Meeting ended successfully');
}

export const zoomRouter = createTRPCRouter({
  createMeeting: publicProcedure
    .input(z.object({
      studyRoomId: z.string(),
      roomName: z.string(),
    }))
    .mutation(async ({ input }) => {
      const meeting = await createZoomMeeting(`Medix Study Room - ${input.roomName}`);

      await supabase
        .from('study_rooms')
        .update({
          zoom_meeting_id: String(meeting.id),
          join_url: meeting.join_url,
          start_url: meeting.start_url,
          zoom_status: 'LIVE',
        })
        .eq('id', input.studyRoomId);

      return {
        zoomMeetingId: String(meeting.id),
        joinUrl: meeting.join_url,
        startUrl: meeting.start_url,
        zoomStatus: 'LIVE' as const,
      };
    }),

  endMeeting: publicProcedure
    .input(z.object({
      zoomMeetingId: z.string(),
    }))
    .mutation(async ({ input }) => {
      await endZoomMeeting(input.zoomMeetingId);

      await supabase
        .from('study_rooms')
        .update({
          zoom_status: 'ENDED',
          zoom_meeting_id: null,
          join_url: null,
          start_url: null,
        })
        .eq('zoom_meeting_id', input.zoomMeetingId);

      return {
        success: true,
        zoomStatus: 'ENDED' as const,
      };
    }),
});
