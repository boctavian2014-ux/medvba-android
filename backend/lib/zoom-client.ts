import { log, logError } from "@/lib/log";

interface ZoomTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

interface ZoomMeetingResponse {
  id: number;
  host_id: string;
  topic: string;
  type: number;
  start_url: string;
  join_url: string;
  password: string;
  h323_password: string;
  pstn_password: string;
  encrypted_password: string;
  settings: {
    host_video: boolean;
    participant_video: boolean;
    join_before_host: boolean;
    mute_upon_entry: boolean;
    watermark: boolean;
    use_pmi: boolean;
    approval_type: number;
    audio: string;
    auto_recording: string;
  };
}

interface ZoomMeetingStatus {
  id: number;
  uuid: string;
  host_id: string;
  topic: string;
  type: number;
  status: string;
  start_time: string;
  duration: number;
  timezone: string;
}

class ZoomClient {
  private accountId: string;
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  constructor() {
    this.accountId = process.env.ZOOM_ACCOUNT_ID || "";
    this.clientId = process.env.ZOOM_CLIENT_ID || "";
    this.clientSecret = process.env.ZOOM_CLIENT_SECRET || "";

    if (!this.accountId || !this.clientId || !this.clientSecret) {
      logError("Zoom credentials missing", {
        hasAccountId: !!this.accountId,
        hasClientId: !!this.clientId,
        hasClientSecret: !!this.clientSecret,
      });
      throw new Error("Zoom credentials not configured");
    }
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const credentials = Buffer.from(
      `${this.clientId}:${this.clientSecret}`,
    ).toString("base64");

    const response = await fetch(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${this.accountId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    if (!response.ok) {
      const error = await response.text();
      logError("Zoom OAuth failed", { status: response.status, error });
      throw new Error(`Failed to get Zoom access token: ${error}`);
    }

    const data: ZoomTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + data.expires_in * 1000 - 60000;

    log("Zoom access token obtained", {
      expiresIn: data.expires_in,
    });

    return this.accessToken;
  }

  async createMeeting(params: {
    topic: string;
    duration: number;
    userId: string;
  }): Promise<{
    meetingId: string;
    joinUrl: string;
    startUrl: string;
    password: string;
  }> {
    const token = await this.getAccessToken();

    const meetingData = {
      topic: params.topic,
      type: 2,
      duration: params.duration,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: true,
        mute_upon_entry: false,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        audio: "both",
        auto_recording: "none",
      },
    };

    log("Creating Zoom meeting", {
      topic: params.topic,
      duration: params.duration,
    });

    const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetingData),
    });

    if (!response.ok) {
      const error = await response.text();
      logError("Failed to create Zoom meeting", {
        status: response.status,
        error,
      });
      throw new Error(`Failed to create Zoom meeting: ${error}`);
    }

    const meeting: ZoomMeetingResponse = await response.json();

    log("Zoom meeting created", {
      meetingId: meeting.id,
      topic: meeting.topic,
    });

    return {
      meetingId: meeting.id.toString(),
      joinUrl: meeting.join_url,
      startUrl: meeting.start_url,
      password: meeting.password,
    };
  }

  async endMeeting(meetingId: string): Promise<void> {
    const token = await this.getAccessToken();

    log("Ending Zoom meeting", { meetingId });

    const response = await fetch(
      `https://api.zoom.us/v2/meetings/${meetingId}/status`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "end",
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      logError("Failed to end Zoom meeting", {
        meetingId,
        status: response.status,
        error,
      });
      throw new Error(`Failed to end Zoom meeting: ${error}`);
    }

    log("Zoom meeting ended", { meetingId });
  }

  async getMeetingStatus(meetingId: string): Promise<{
    id: string;
    status: string;
    topic: string;
    startTime: string;
    duration: number;
  }> {
    const token = await this.getAccessToken();

    log("Getting Zoom meeting status", { meetingId });

    const response = await fetch(
      `https://api.zoom.us/v2/meetings/${meetingId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        log("Zoom meeting not found", { meetingId });
        return {
          id: meetingId,
          status: "not_found",
          topic: "",
          startTime: "",
          duration: 0,
        };
      }

      const error = await response.text();
      logError("Failed to get Zoom meeting status", {
        meetingId,
        status: response.status,
        error,
      });
      throw new Error(`Failed to get Zoom meeting status: ${error}`);
    }

    const meeting: ZoomMeetingStatus = await response.json();

    log("Zoom meeting status retrieved", {
      meetingId: meeting.id,
      status: meeting.status,
    });

    return {
      id: meeting.id.toString(),
      status: meeting.status,
      topic: meeting.topic,
      startTime: meeting.start_time,
      duration: meeting.duration,
    };
  }
}

export const zoomClient = new ZoomClient();
