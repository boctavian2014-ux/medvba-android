import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { db } from "../../db";
import { ZoomStatus } from "../../schema";

export const studyRoomsRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({
      limit: z.number().min(1).max(100).optional().default(20),
    }).optional())
    .query(async ({ input }) => {
      const limit = input?.limit ?? 20;
      console.log("Fetching study rooms, limit:", limit);

      const rooms = await db
        .selectFrom('study_rooms')
        .selectAll()
        .orderBy('created_at', 'desc')
        .limit(limit)
        .execute();

      console.log("Study rooms fetched:", rooms.length);

      return rooms.map(room => ({
        id: room.id,
        name: room.name,
        host: room.host_name,
        hostId: room.host_id,
        hostAvatar: room.host_avatar,
        participants: room.participants,
        maxParticipants: room.max_participants,
        category: room.category,
        isLive: room.is_live,
        zoomMeetingId: room.zoom_meeting_id ?? undefined,
        joinUrl: room.join_url ?? undefined,
        startUrl: room.start_url ?? undefined,
        zoomStatus: room.zoom_status as ZoomStatus,
      }));
    }),

  byId: publicProcedure
    .input(z.object({
      id: z.string().uuid(),
    }))
    .query(async ({ input }) => {
      console.log("Fetching study room:", input.id);

      const room = await db
        .selectFrom('study_rooms')
        .selectAll()
        .where('id', '=', input.id)
        .executeTakeFirst();

      if (!room) {
        console.log("Study room not found:", input.id);
        return null;
      }

      return {
        id: room.id,
        name: room.name,
        host: room.host_name,
        hostId: room.host_id,
        hostAvatar: room.host_avatar,
        participants: room.participants,
        maxParticipants: room.max_participants,
        category: room.category,
        isLive: room.is_live,
        zoomMeetingId: room.zoom_meeting_id ?? undefined,
        joinUrl: room.join_url ?? undefined,
        startUrl: room.start_url ?? undefined,
        zoomStatus: room.zoom_status as ZoomStatus,
      };
    }),

  create: publicProcedure
    .input(z.object({
      name: z.string().min(1).max(100),
      hostId: z.string().uuid(),
      hostName: z.string(),
      hostAvatar: z.string(),
      category: z.string().default('general'),
      maxParticipants: z.number().min(2).max(100).default(20),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating study room:", input.name);

      const room = await db
        .insertInto('study_rooms')
        .values({
          name: input.name,
          host_id: input.hostId,
          host_name: input.hostName,
          host_avatar: input.hostAvatar,
          category: input.category,
          max_participants: input.maxParticipants,
          participants: 0,
          is_live: false,
          zoom_status: 'IDLE',
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      console.log("Study room created:", room.id);

      return {
        id: room.id,
        name: room.name,
        host: room.host_name,
        hostId: room.host_id,
        hostAvatar: room.host_avatar,
        participants: room.participants,
        maxParticipants: room.max_participants,
        category: room.category,
        isLive: room.is_live,
        zoomStatus: room.zoom_status as ZoomStatus,
      };
    }),

  updateZoomInfo: publicProcedure
    .input(z.object({
      roomId: z.string().uuid(),
      zoomMeetingId: z.string().optional(),
      joinUrl: z.string().optional(),
      startUrl: z.string().optional(),
      zoomStatus: z.enum(['IDLE', 'LIVE', 'ENDED']),
      isLive: z.boolean().optional(),
    }))
    .mutation(async ({ input }) => {
      console.log("Updating Zoom info for room:", input.roomId);

      const updateData: Record<string, unknown> = {
        zoom_status: input.zoomStatus,
      };

      if (input.zoomMeetingId !== undefined) updateData.zoom_meeting_id = input.zoomMeetingId;
      if (input.joinUrl !== undefined) updateData.join_url = input.joinUrl;
      if (input.startUrl !== undefined) updateData.start_url = input.startUrl;
      if (input.isLive !== undefined) updateData.is_live = input.isLive;

      const room = await db
        .updateTable('study_rooms')
        .set(updateData)
        .where('id', '=', input.roomId)
        .returningAll()
        .executeTakeFirst();

      if (!room) {
        throw new Error("Study room not found");
      }

      console.log("Study room Zoom info updated:", input.roomId);

      return {
        id: room.id,
        name: room.name,
        host: room.host_name,
        hostId: room.host_id,
        hostAvatar: room.host_avatar,
        participants: room.participants,
        maxParticipants: room.max_participants,
        category: room.category,
        isLive: room.is_live,
        zoomMeetingId: room.zoom_meeting_id ?? undefined,
        joinUrl: room.join_url ?? undefined,
        startUrl: room.start_url ?? undefined,
        zoomStatus: room.zoom_status as ZoomStatus,
      };
    }),

  updateParticipants: publicProcedure
    .input(z.object({
      roomId: z.string().uuid(),
      participants: z.number().min(0),
    }))
    .mutation(async ({ input }) => {
      console.log("Updating participants for room:", input.roomId);

      const room = await db
        .updateTable('study_rooms')
        .set({ participants: input.participants })
        .where('id', '=', input.roomId)
        .returningAll()
        .executeTakeFirst();

      if (!room) {
        throw new Error("Study room not found");
      }

      return { success: true, participants: room.participants };
    }),
});
