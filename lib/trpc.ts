import { httpLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import Constants from "expo-constants";
import superjson from "superjson";

import type { AppRouter } from "@/backend/trpc/app-router";
import { supabase } from "@/lib/supabase";

export const trpc = createTRPCReact<AppRouter>();

const extraConfig =
  Constants.expoConfig?.extra ?? (Constants as any)?.manifest?.extra ?? {};

const getBaseUrl = () => {
  const url =
    process.env.EXPO_PUBLIC_RORK_API_BASE_URL ||
    extraConfig.EXPO_PUBLIC_RORK_API_BASE_URL ||
    extraConfig.rorkApiBaseUrl;

  if (!url) {
    throw new Error(
      "EXPO_PUBLIC_RORK_API_BASE_URL not set. Add it to .env and restart.",
    );
  }

  if (!__DEV__ && url.startsWith("http://")) {
    throw new Error(
      "In production, EXPO_PUBLIC_RORK_API_BASE_URL must use HTTPS.",
    );
  }

  return url;
};

export const trpcClient = trpc.createClient({
  links: [
    httpLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
      async headers() {
        const { data } = await supabase.auth.getSession();
        const token = data?.session?.access_token;
        return token ? { Authorization: `Bearer ${token}` } : {};
      },
    }),
  ],
});
