import * as z from "zod";
import { createTRPCRouter, publicProcedure } from "../create-context";
import { db } from "../../db";
import { TRPCError } from "@trpc/server";

export const usersRouter = createTRPCRouter({
  me: publicProcedure
    .input(z.object({
      userId: z.string().uuid(),
    }))
    .query(async ({ input }) => {
      console.log("Fetching user:", input.userId);
      
      const user = await db
        .selectFrom('users')
        .selectAll()
        .where('id', '=', input.userId)
        .executeTakeFirst();

      if (!user) {
        console.log("User not found:", input.userId);
        return null;
      }

      return {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        rank: user.rank,
        points: user.points,
        streak: user.streak,
        questionsAnswered: user.questions_answered,
        accuracy: Number(user.accuracy),
        studyHours: Number(user.study_hours),
        badges: user.badges,
        joinedDate: user.joined_at?.toISOString() ?? new Date().toISOString(),
      };
    }),

  leaderboard: publicProcedure
    .input(z.object({
      limit: z.number().min(1).max(100).optional().default(50),
    }).optional())
    .query(async ({ input }) => {
      const limit = input?.limit ?? 50;
      console.log("Fetching leaderboard, limit:", limit);

      const users = await db
        .selectFrom('users')
        .select(['id', 'name', 'avatar', 'rank', 'points', 'streak'])
        .orderBy('points', 'desc')
        .limit(limit)
        .execute();

      console.log("Leaderboard fetched:", users.length, "users");

      return users.map((user, index) => ({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        rank: index + 1,
        points: user.points,
        streak: user.streak,
      }));
    }),

  create: publicProcedure
    .input(z.object({
      id: z.string().uuid(),
      name: z.string().min(1).max(100),
      avatar: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      console.log("Creating user:", input.id, input.name);

      const existing = await db
        .selectFrom('users')
        .selectAll()
        .where('id', '=', input.id)
        .executeTakeFirst();

      if (existing) {
        console.log("User already exists:", input.id);
        return existing;
      }

      const newUser = await db
        .insertInto('users')
        .values({
          id: input.id,
          name: input.name,
          avatar: input.avatar || `https://api.dicebear.com/7.x/avataaars/png?seed=${input.id}`,
          rank: 0,
          points: 0,
          streak: 0,
          questions_answered: 0,
          accuracy: 0,
          study_hours: 0,
          badges: [],
        })
        .returningAll()
        .executeTakeFirst();

      if (!newUser) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create user',
        });
      }

      console.log("User created successfully:", newUser.id);
      return newUser;
    }),

  updateStats: publicProcedure
    .input(z.object({
      userId: z.string().uuid(),
      points: z.number().optional(),
      streak: z.number().optional(),
      questionsAnswered: z.number().optional(),
      accuracy: z.number().optional(),
      studyHours: z.number().optional(),
    }))
    .mutation(async ({ input }) => {
      console.log("Updating user stats:", input.userId);

      const updateData: Record<string, unknown> = {};
      if (input.points !== undefined) updateData.points = input.points;
      if (input.streak !== undefined) updateData.streak = input.streak;
      if (input.questionsAnswered !== undefined) updateData.questions_answered = input.questionsAnswered;
      if (input.accuracy !== undefined) updateData.accuracy = input.accuracy;
      if (input.studyHours !== undefined) updateData.study_hours = input.studyHours;

      if (Object.keys(updateData).length === 0) {
        throw new Error("No fields to update");
      }

      const updated = await db
        .updateTable('users')
        .set(updateData)
        .where('id', '=', input.userId)
        .returningAll()
        .executeTakeFirst();

      if (!updated) {
        throw new Error("User not found");
      }

      console.log("User stats updated:", input.userId);
      return updated;
    }),
});
