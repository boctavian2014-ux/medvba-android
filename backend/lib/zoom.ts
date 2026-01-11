const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID || "";
const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID || "";
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET || "";

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

let cachedToken: CachedToken | null = null;

export interface ZoomMeetingResponse {
  id: number;
  join_url: string;
  start_url: string;
  status: string;
}

export interface CreateInstantMeetingPayload {
  topic: string;
  type?: 1;
  settings?: {
    join_before_host?: boolean;
    waiting_room?: boolean;
    host_video?: boolean;
    participant_video?: boolean;
    mute_upon_entry?: boolean;
    audio?: string;
  };
}

export interface CreateScheduledMeetingPayload {
  topic: string;
  type: 2;
  startTime: string;
  durationMinutes: number;
  timezone?: string;
  agenda?: string;
  settings?: {
    host_video?: boolean;
    participant_video?: boolean;
    join_before_host?: boolean;
    mute_upon_entry?: boolean;
    waiting_room?: boolean;
    approval_type?: number;
    audio?: string;
    auto_recording?: 'none' | 'local' | 'cloud';
  };
}

export type CreateMeetingPayload = CreateInstantMeetingPayload | CreateScheduledMeetingPayload;

export async function getZoomAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    console.log("Using cached Zoom access token");
    return cachedToken.accessToken;
  }

  console.log("Requesting new Zoom access token...");
  
  if (!ZOOM_ACCOUNT_ID || !ZOOM_CLIENT_ID || !ZOOM_CLIENT_SECRET) {
    throw new Error("Zoom credentials not configured. Please set ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, and ZOOM_CLIENT_SECRET.");
  }

  const credentials = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://zoom.us/oauth/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "account_credentials",
      account_id: ZOOM_ACCOUNT_ID,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Zoom OAuth error:", response.status, errorText);
    throw new Error(`Failed to get Zoom access token: ${response.status}`);
  }

  const data = await response.json();
  
  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  console.log("Zoom access token obtained, expires in:", data.expires_in, "seconds");
  return data.access_token;
}

export async function createZoomMeetingForAppHost(
  payload: CreateMeetingPayload
): Promise<ZoomMeetingResponse> {
  const accessToken = await getZoomAccessToken();

  let meetingBody: Record<string, unknown>;

  if (payload.type === 2) {
    const scheduledPayload = payload as CreateScheduledMeetingPayload;
    meetingBody = {
      topic: scheduledPayload.topic,
      type: 2,
      start_time: scheduledPayload.startTime,
      duration: scheduledPayload.durationMinutes,
      timezone: scheduledPayload.timezone ?? 'UTC',
      agenda: scheduledPayload.agenda ?? '',
      settings: {
        host_video: scheduledPayload.settings?.host_video ?? true,
        participant_video: scheduledPayload.settings?.participant_video ?? false,
        join_before_host: scheduledPayload.settings?.join_before_host ?? false,
        mute_upon_entry: scheduledPayload.settings?.mute_upon_entry ?? true,
        waiting_room: scheduledPayload.settings?.waiting_room ?? true,
        approval_type: scheduledPayload.settings?.approval_type ?? 2,
        audio: scheduledPayload.settings?.audio ?? 'both',
        auto_recording: scheduledPayload.settings?.auto_recording ?? 'none',
      },
    };
  } else {
    meetingBody = {
      topic: payload.topic,
      type: 1,
      settings: {
        join_before_host: payload.settings?.join_before_host ?? true,
        waiting_room: payload.settings?.waiting_room ?? false,
        host_video: payload.settings?.host_video ?? true,
        participant_video: payload.settings?.participant_video ?? true,
        mute_upon_entry: payload.settings?.mute_upon_entry ?? true,
        audio: payload.settings?.audio ?? 'both',
      },
    };
  }

  console.log("Creating Zoom meeting with payload:", JSON.stringify(meetingBody));

  const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meetingBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Zoom create meeting error:", response.status, errorText);
    throw new Error(`Failed to create Zoom meeting: ${response.status}`);
  }

  const meeting = await response.json();
  console.log("Zoom meeting created successfully:", meeting.id);

  return {
    id: meeting.id,
    join_url: meeting.join_url,
    start_url: meeting.start_url,
    status: meeting.status,
  };
}

export async function endZoomMeeting(meetingId: string): Promise<void> {
  const accessToken = await getZoomAccessToken();

  console.log("Ending Zoom meeting:", meetingId);

  const response = await fetch(
    `https://api.zoom.us/v2/meetings/${meetingId}/status`,
    {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "end" }),
    }
  );

  if (!response.ok && response.status !== 204) {
    const errorText = await response.text();
    console.error("Failed to end Zoom meeting:", response.status, errorText);
    throw new Error(`Failed to end Zoom meeting: ${response.status}`);
  }

  console.log("Zoom meeting ended successfully");
}
