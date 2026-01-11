import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { createZoomMeetingForAppHost, endZoomMeeting } from "../../lib/zoom";

export const zoomRouter = createTRPCRouter({
  createMeeting: publicProcedure
    .input(z.object({
      studyRoomId: z.string(),
      roomName: z.string(),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating Zoom meeting for room:", input.studyRoomId, input.roomName);

      const meeting = await createZoomMeetingForAppHost({
        topic: `Medix Study Room - ${input.roomName}`,
        type: 1,
        settings: {
          join_before_host: true,
          waiting_room: false,
          host_video: true,
          participant_video: true,
          mute_upon_entry: true,
        },
      });

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

      await endZoomMeeting(input.zoomMeetingId);

      return { success: true, zoomStatus: "ENDED" as const };
    }),
});
