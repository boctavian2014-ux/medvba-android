import { createTRPCRouter } from "./create-context";
import { revenuecatRouter } from "./revenuecat";

export const appRouter = createTRPCRouter({
  revenuecat: revenuecatRouter,
});

export type AppRouter = typeof appRouter;
