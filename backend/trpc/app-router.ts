import { createTRPCRouter } from "./create-context";
import { accountRouter } from "./account";
import { tutorRouter } from "./tutor";

export const appRouter = createTRPCRouter({
  account: accountRouter,
  tutor: tutorRouter,
});

export type AppRouter = typeof appRouter;
