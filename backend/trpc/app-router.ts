import { createTRPCRouter } from "./create-context";
import { accountRouter } from "./account";
import { tutorRouter } from "./tutor";
import { subscriptionRouter } from "./subscription";

export const appRouter = createTRPCRouter({
  account: accountRouter,
  tutor: tutorRouter,
  subscription: subscriptionRouter,
});

export type AppRouter = typeof appRouter;
