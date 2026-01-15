import * as z from "zod";

import { zoomClient } from "@/backend/lib/zoom-client";
import { log, logError } from "@/lib/log";

import { createTRPCRouter, protectedProcedure } from "../create-context";

export const zoomRouter = createTRPCRouter({
  createMeeting: protectedProcedure
    .input(
      z.object({
        topic: z.string().min(1).max(200),
        duration: z.number().min(1).max(1440),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        log("Creating Zoom meeting via tRPC", {
          topic: input.topic,
          duration: input.duration,
          userId: input.userId,
        });

        const meeting = await zoomClient.createMeeting({
          topic: input.topic,
          duration: input.duration,
          userId: input.userId,
        });

        log("Zoom meeting created via tRPC", {
          meetingId: meeting.meetingId,
        });

        return {
          success: true,
          meeting,
        };
      } catch (error) {
        logError("Failed to create Zoom meeting via tRPC", { error });
        throw new Error(
          error instanceof Error
            ? error.message
            : "Failed to create Zoom meeting",
        );
      }
    }),

  endMeeting: protectedProcedure
    .input(
      z.object({
        meetingId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        log("Ending Zoom meeting via tRPC", {
          meetingId: input.meetingId,
        });

        await zoomClient.endMeeting(input.meetingId);

        log("Zoom meeting ended via tRPC", {
          meetingId: input.meetingId,
        });

        return {
          success: true,
        };
      } catch (error) {
        logError("Failed to end Zoom meeting via tRPC", { error });
        throw new Error(
          error instanceof Error ? error.message : "Failed to end Zoom meeting",
        );
      }
    }),

  getMeetingStatus: protectedProcedure
    .input(
      z.object({
        meetingId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        log("Getting Zoom meeting status via tRPC", {
          meetingId: input.meetingId,
        });

        const status = await zoomClient.getMeetingStatus(input.meetingId);

        log("Zoom meeting status retrieved via tRPC", {
          meetingId: input.meetingId,
          status: status.status,
        });

        return {
          success: true,
          status,
        };
      } catch (error) {
        logError("Failed to get Zoom meeting status via tRPC", { error });
        throw new Error(
          error instanceof Error
            ? error.message
            : "Failed to get Zoom meeting status",
        );
      }
    }),
});
