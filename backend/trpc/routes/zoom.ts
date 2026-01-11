import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";

const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID || "";
const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID || "";
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET || "";

async function getZoomAccessToken(): Promise<string> {
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
    const error = await response.text();
    console.error("Zoom OAuth error:", error);
    throw new Error("Failed to get Zoom access token");
  }

  const data = await response.json();
  return data.access_token;
}

async function createZoomMeeting(accessToken: string, topic: string): Promise<{
  id: number;
  join_url: string;
  start_url: string;
}> {
  const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
      type: 1,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        mute_upon_entry: true,
        waiting_room: false,
        audio: "both",
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Zoom create meeting error:", error);
    throw new Error("Failed to create Zoom meeting");
  }

  return response.json();
}

export const zoomRouter = createTRPCRouter({
  createMeeting: publicProcedure
    .input(z.object({
      studyRoomId: z.string(),
      roomName: z.string(),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating Zoom meeting for room:", input.studyRoomId, input.roomName);
      
      const accessToken = await getZoomAccessToken();
      const meeting = await createZoomMeeting(accessToken, input.roomName);
      
      console.log("Zoom meeting created:", meeting.id);
      
      return {
        zoomMeetingId: String(meeting.id),
        joinUrl: meeting.join_url,
        startUrl: meeting.start_url,
        zoomStatus: "LIVE" as const,
      };
    }),

  endMeeting: publicProcedure
    .input(z.object({
      zoomMeetingId: z.string(),
    }))
    .mutation(async ({ input }) => {
      console.log("Ending Zoom meeting:", input.zoomMeetingId);
      
      const accessToken = await getZoomAccessToken();
      
      const response = await fetch(
        `https://api.zoom.us/v2/meetings/${input.zoomMeetingId}/status`,
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
        console.error("Failed to end meeting:", await response.text());
      }
      
      return { success: true, zoomStatus: "ENDED" as const };
    }),
});
