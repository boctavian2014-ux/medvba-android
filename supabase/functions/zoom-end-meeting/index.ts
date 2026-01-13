/* eslint-disable import/no-unresolved */
// @ts-nocheck
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

async function endZoomMeeting(meetingId: string) {
  const accessToken = await getZoomAccessToken();

  console.log('Ending Zoom meeting:', meetingId);

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
    console.error('Failed to end Zoom meeting:', response.status, errorText);
    throw new Error(`Failed to end Zoom meeting: ${response.status}`);
  }

  console.log('Zoom meeting ended successfully');
}

serve(async (req: Request) => {
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
    const { zoomMeetingId } = await req.json();

    if (!zoomMeetingId) {
      return new Response(
        JSON.stringify({ error: 'Missing zoomMeetingId' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await endZoomMeeting(zoomMeetingId);

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    await supabase
      .from('study_rooms')
      .update({
        zoom_status: 'ENDED',
        is_live: false,
        zoom_meeting_id: null,
        join_url: null,
        start_url: null,
      })
      .eq('zoom_meeting_id', zoomMeetingId);

    return new Response(
      JSON.stringify({ success: true, zoomStatus: 'ENDED' }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
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
