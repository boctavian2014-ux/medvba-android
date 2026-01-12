import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { db } from "../../db";

export const accountRouter = createTRPCRouter({
  deleteAccount: publicProcedure
    .input(z.object({
      userId: z.string().uuid(),
    }))
    .mutation(async ({ input }) => {
      console.log("[Account] Starting account deletion for user:", input.userId);

      try {
        const user = await db
          .selectFrom('users')
          .select(['id'])
          .where('id', '=', input.userId)
          .executeTakeFirst();

        if (!user) {
          console.log("[Account] User not found:", input.userId);
          throw new Error("User not found");
        }

        console.log("[Account] Deleting study sessions for rooms hosted by user...");
        const userRooms = await db
          .selectFrom('study_rooms')
          .select(['id'])
          .where('host_id', '=', input.userId)
          .execute();

        const roomIds = userRooms.map(r => r.id);
        
        if (roomIds.length > 0) {
          await db
            .deleteFrom('study_sessions')
            .where('room_id', 'in', roomIds)
            .execute();
          console.log("[Account] Deleted sessions for", roomIds.length, "rooms");
        }

        console.log("[Account] Deleting study rooms hosted by user...");
        await db
          .deleteFrom('study_rooms')
          .where('host_id', '=', input.userId)
          .execute();
        console.log("[Account] Deleted study rooms for user");

        console.log("[Account] Removing user from session attendees...");
        const allSessions = await db
          .selectFrom('study_sessions')
          .select(['id', 'attendees'])
          .execute();

        for (const session of allSessions) {
          if (session.attendees && session.attendees.includes(input.userId)) {
            const updatedAttendees = session.attendees.filter(id => id !== input.userId);
            await db
              .updateTable('study_sessions')
              .set({ attendees: updatedAttendees })
              .where('id', '=', session.id)
              .execute();
          }
        }
        console.log("[Account] Cleaned up session attendees");

        console.log("[Account] Deleting user record...");
        await db
          .deleteFrom('users')
          .where('id', '=', input.userId)
          .execute();
        console.log("[Account] Deleted user record");

        console.log("[Account] Account deletion completed successfully for:", input.userId);
        
        return { success: true };
      } catch (error) {
        console.error("[Account] Error during account deletion:", error);
        throw new Error("Failed to delete account. Please try again.");
      }
    }),
});
