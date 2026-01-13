import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ZOOM_ACCOUNT_ID = Deno.env.get('ZOOM_ACCOUNT_ID') || '';
const ZOOM_CLIENT_ID = Deno.env.get('ZOOM_CLIENT_ID') || '';
const ZOOM_CLIENT_SECRET = Deno.env.get('ZOOM_CLIENT_SECRET') || '';

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

let cachedToken: CachedToken | null = null;

async function getZoomAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    console.log('Using cached Zoom access token');
    return cachedToken.accessToken;
  }

  console.log('Requesting new Zoom access token...');

  if (!ZOOM_ACCOUNT_ID || !ZOOM_CLIENT_ID || !ZOOM_CLIENT_SECRET) {
    throw new Error('Zoom credentials not configured');
  }

  const credentials = btoa(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`);

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
    console.error('Zoom OAuth error:', response.status, errorText);
    throw new Error(`Failed to get Zoom access token: ${response.status}`);
  }

  const data = await response.json();

  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  console.log('Zoom access token obtained');
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

  console.log('Creating Zoom meeting:', topic);

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
    console.error('Zoom create meeting error:', response.status, errorText);
    throw new Error(`Failed to create Zoom meeting: ${response.status}`);
  }

  const meeting = await response.json();
  console.log('Zoom meeting created:', meeting.id);

  return {
    id: meeting.id,
    join_url: meeting.join_url,
    start_url: meeting.start_url,
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  try {
    const { studyRoomId, roomName } = await req.json();

    if (!studyRoomId || !roomName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const meeting = await createZoomMeeting(`Medix Study Room - ${roomName}`);

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    await supabase
      .from('study_rooms')
      .update({
        zoom_meeting_id: String(meeting.id),
        join_url: meeting.join_url,
        start_url: meeting.start_url,
        zoom_status: 'LIVE',
        is_live: true,
      })
      .eq('id', studyRoomId);

    return new Response(
      JSON.stringify({
        zoomMeetingId: String(meeting.id),
        joinUrl: meeting.join_url,
        startUrl: meeting.start_url,
        zoomStatus: 'LIVE',
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
});
