import { TRPCError } from "@trpc/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "./create-context";

const deleteSelfResultSchema = z.object({
  success: z.literal(true),
});

const getSupabaseAdmin = () => {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Supabase admin config missing (SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY).",
    });
  }

  return createClient(url, serviceRoleKey);
};

export const accountRouter = createTRPCRouter({
  deleteSelf: protectedProcedure.output(deleteSelfResultSchema).mutation(async ({ ctx }) => {
    console.log('[Account] Starting deleteSelf mutation');
    
    let supabaseAdmin;
    try {
      supabaseAdmin = getSupabaseAdmin();
      console.log('[Account] Supabase admin client created');
    } catch (error) {
      console.error('[Account] Failed to create Supabase admin:', error);
      throw error;
    }

    console.log('[Account] Validating user token...');
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(
      ctx.token
    );

    if (userError || !userData?.user?.id) {
      console.error('[Account] Token validation failed:', userError);
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid session. Please log in again.",
        cause: userError,
      });
    }

    console.log('[Account] Token valid, user ID:', userData.user.id);
    console.log('[Account] Deleting user from Supabase...');
    
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      userData.user.id
    );

    if (deleteError) {
      console.error('[Account] Supabase delete failed:', deleteError);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to delete user account.",
        cause: deleteError,
      });
    }

    console.log('[Account] User deleted successfully');
    return { success: true };
  }),
});
