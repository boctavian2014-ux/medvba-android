import { createTRPCRouter } from "./create-context";
import { accountRouter } from "./account";
import { revenuecatRouter } from "./revenuecat";

export const appRouter = createTRPCRouter({
  account: accountRouter,
  revenuecat: revenuecatRouter,
});

export type AppRouter = typeof appRouter;
