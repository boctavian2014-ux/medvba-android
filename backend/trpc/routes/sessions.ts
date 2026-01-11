import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { createZoomMeetingForAppHost } from "../../lib/zoom";
import { studySessions, studyRooms, StudySession } from "../../../mocks/activities";

export const sessionsRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      roomId: z.string(),
      title: z.string(),
      description: z.string().optional(),
      scheduledFor: z.string(),
      durationMinutes: z.number().min(15).max(480),
      hostId: z.string(),
      hostName: z.string(),
      hostAvatar: z.string(),
      category: z.string(),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating scheduled session for room:", input.roomId);

      const room = studyRooms.find(r => r.id === input.roomId);
      if (!room) {
        throw new Error("Study room not found");
      }

      const meeting = await createZoomMeetingForAppHost({
        topic: `Medix Session - ${input.title}`,
        type: 2,
        startTime: input.scheduledFor,
        duration: input.durationMinutes,
        settings: {
          join_before_host: true,
          waiting_room: false,
          host_video: true,
          participant_video: true,
          mute_upon_entry: true,
        },
      });

      const newSession: StudySession = {
        id: `session_${Date.now()}`,
        roomId: input.roomId,
        title: input.title,
        description: input.description,
        scheduledFor: input.scheduledFor,
        durationMinutes: input.durationMinutes,
        hostId: input.hostId,
        hostName: input.hostName,
        hostAvatar: input.hostAvatar,
        zoomMeetingId: String(meeting.id),
        joinUrl: meeting.join_url,
        startUrl: meeting.start_url,
        status: 'SCHEDULED',
        attendees: [],
        category: input.category,
      };

      studySessions.push(newSession);
      console.log("Session created:", newSession.id);

      return newSession;
    }),

  listUpcoming: publicProcedure
    .input(z.object({
      userId: z.string().optional(),
    }).optional())
    .query(({ input }) => {
      const now = new Date();
      
      const upcoming = studySessions
        .filter(session => {
          const sessionTime = new Date(session.scheduledFor);
          const sessionEnd = new Date(sessionTime.getTime() + session.durationMinutes * 60 * 1000);
          return session.status !== 'ENDED' && sessionEnd > now;
        })
        .sort((a, b) => new Date(a.scheduledFor).getTime() - new Date(b.scheduledFor).getTime());

      console.log("Returning upcoming sessions:", upcoming.length);
      return upcoming;
    }),

  markLive: publicProcedure
    .input(z.object({
      sessionId: z.string(),
    }))
    .mutation(({ input }) => {
      const sessionIndex = studySessions.findIndex(s => s.id === input.sessionId);
      if (sessionIndex === -1) {
        throw new Error("Session not found");
      }

      studySessions[sessionIndex] = {
        ...studySessions[sessionIndex],
        status: 'LIVE',
      };

      console.log("Session marked as LIVE:", input.sessionId);
      return studySessions[sessionIndex];
    }),

  markEnded: publicProcedure
    .input(z.object({
      sessionId: z.string(),
    }))
    .mutation(({ input }) => {
      const sessionIndex = studySessions.findIndex(s => s.id === input.sessionId);
      if (sessionIndex === -1) {
        throw new Error("Session not found");
      }

      studySessions[sessionIndex] = {
        ...studySessions[sessionIndex],
        status: 'ENDED',
      };

      console.log("Session marked as ENDED:", input.sessionId);
      return studySessions[sessionIndex];
    }),

  join: publicProcedure
    .input(z.object({
      sessionId: z.string(),
      userId: z.string(),
    }))
    .mutation(({ input }) => {
      const sessionIndex = studySessions.findIndex(s => s.id === input.sessionId);
      if (sessionIndex === -1) {
        throw new Error("Session not found");
      }

      if (!studySessions[sessionIndex].attendees.includes(input.userId)) {
        studySessions[sessionIndex].attendees.push(input.userId);
      }

      console.log("User joined session:", input.sessionId, input.userId);
      return studySessions[sessionIndex];
    }),

  leave: publicProcedure
    .input(z.object({
      sessionId: z.string(),
      userId: z.string(),
    }))
    .mutation(({ input }) => {
      const sessionIndex = studySessions.findIndex(s => s.id === input.sessionId);
      if (sessionIndex === -1) {
        throw new Error("Session not found");
      }

      studySessions[sessionIndex].attendees = studySessions[sessionIndex].attendees.filter(
        id => id !== input.userId
      );

      console.log("User left session:", input.sessionId, input.userId);
      return studySessions[sessionIndex];
    }),
});
