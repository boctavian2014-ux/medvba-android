import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { createZoomMeetingForAppHost } from "../../lib/zoom";
import { db } from "../../db";
import { SessionStatus } from "../../schema";


export const sessionsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      roomId: z.string().uuid(),
      title: z.string(),
      description: z.string().optional(),
      scheduledFor: z.string(),
      durationMinutes: z.number().min(15).max(480),
      hostId: z.string().uuid(),
      hostName: z.string(),
      hostAvatar: z.string(),
      category: z.string(),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating scheduled session for room:", input.roomId);

      const room = await db
        .selectFrom('study_rooms')
        .selectAll()
        .where('id', '=', input.roomId)
        .executeTakeFirst();

      if (!room) {
        throw new Error("Study room not found");
      }

      const meeting = await createZoomMeetingForAppHost({
        topic: `Medix Session - ${input.title}`,
        type: 2,
        startTime: input.scheduledFor,
        durationMinutes: input.durationMinutes,
        agenda: input.description,
      });

      const session = await db
        .insertInto('study_sessions')
        .values({
          room_id: input.roomId,
          title: input.title,
          description: input.description ?? null,
          scheduled_for: input.scheduledFor,
          duration_minutes: input.durationMinutes,
          host_id: input.hostId,
          host_name: input.hostName,
          host_avatar: input.hostAvatar,
          zoom_meeting_id: String(meeting.id),
          join_url: meeting.join_url,
          start_url: meeting.start_url,
          status: 'SCHEDULED',
          attendees: [],
          category: input.category,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      console.log("Session created:", session.id);

      return {
        id: session.id,
        roomId: session.room_id,
        title: session.title,
        description: session.description ?? undefined,
        scheduledFor: session.scheduled_for.toISOString(),
        durationMinutes: session.duration_minutes,
        hostId: session.host_id,
        hostName: session.host_name,
        hostAvatar: session.host_avatar,
        zoomMeetingId: session.zoom_meeting_id ?? undefined,
        joinUrl: session.join_url ?? undefined,
        startUrl: session.start_url ?? undefined,
        status: session.status as SessionStatus,
        attendees: session.attendees,
        category: session.category,
      };
    }),

  listUpcoming: publicProcedure
    .input(z.object({
      userId: z.string().optional(),
      limit: z.number().min(1).max(50).optional().default(20),
    }).optional())
    .query(async ({ input }) => {
      const limit = input?.limit ?? 20;
      console.log("Fetching upcoming sessions, limit:", limit);

      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      
      const sessions = await db
        .selectFrom('study_sessions')
        .selectAll()
        .where('status', '!=', 'ENDED')
        .where('scheduled_for', '>=', oneHourAgo)
        .orderBy('scheduled_for', 'asc')
        .limit(limit)
        .execute();

      console.log("Returning upcoming sessions:", sessions.length);

      return sessions.map(session => ({
        id: session.id,
        roomId: session.room_id,
        title: session.title,
        description: session.description ?? undefined,
        scheduledFor: session.scheduled_for.toISOString(),
        durationMinutes: session.duration_minutes,
        hostId: session.host_id,
        hostName: session.host_name,
        hostAvatar: session.host_avatar,
        zoomMeetingId: session.zoom_meeting_id ?? undefined,
        joinUrl: session.join_url ?? undefined,
        startUrl: session.start_url ?? undefined,
        status: session.status as SessionStatus,
        attendees: session.attendees,
        category: session.category,
      }));
    }),

  markLive: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
    }))
    .mutation(async ({ input }) => {
      console.log("Marking session as LIVE:", input.sessionId);

      const session = await db
        .updateTable('study_sessions')
        .set({ status: 'LIVE' })
        .where('id', '=', input.sessionId)
        .returningAll()
        .executeTakeFirst();

      if (!session) {
        throw new Error("Session not found");
      }

      console.log("Session marked as LIVE:", input.sessionId);

      return {
        id: session.id,
        roomId: session.room_id,
        title: session.title,
        status: session.status as SessionStatus,
      };
    }),

  markEnded: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
    }))
    .mutation(async ({ input }) => {
      console.log("Marking session as ENDED:", input.sessionId);

      const session = await db
        .updateTable('study_sessions')
        .set({ status: 'ENDED' })
        .where('id', '=', input.sessionId)
        .returningAll()
        .executeTakeFirst();

      if (!session) {
        throw new Error("Session not found");
      }

      console.log("Session marked as ENDED:", input.sessionId);

      return {
        id: session.id,
        roomId: session.room_id,
        title: session.title,
        status: session.status as SessionStatus,
      };
    }),

  join: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
      userId: z.string().uuid(),
    }))
    .mutation(async ({ input }) => {
      console.log("User joining session:", input.sessionId, input.userId);

      const session = await db
        .selectFrom('study_sessions')
        .selectAll()
        .where('id', '=', input.sessionId)
        .executeTakeFirst();

      if (!session) {
        throw new Error("Session not found");
      }

      const attendees = session.attendees.includes(input.userId)
        ? session.attendees
        : [...session.attendees, input.userId];

      const updated = await db
        .updateTable('study_sessions')
        .set({ attendees })
        .where('id', '=', input.sessionId)
        .returningAll()
        .executeTakeFirstOrThrow();

      console.log("User joined session:", input.sessionId, input.userId);

      return {
        id: updated.id,
        attendees: updated.attendees,
      };
    }),

  leave: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
      userId: z.string().uuid(),
    }))
    .mutation(async ({ input }) => {
      console.log("User leaving session:", input.sessionId, input.userId);

      const session = await db
        .selectFrom('study_sessions')
        .selectAll()
        .where('id', '=', input.sessionId)
        .executeTakeFirst();

      if (!session) {
        throw new Error("Session not found");
      }

      const attendees = session.attendees.filter(id => id !== input.userId);

      const updated = await db
        .updateTable('study_sessions')
        .set({ attendees })
        .where('id', '=', input.sessionId)
        .returningAll()
        .executeTakeFirstOrThrow();

      console.log("User left session:", input.sessionId, input.userId);

      return {
        id: updated.id,
        attendees: updated.attendees,
      };
    }),
});
