import { createTRPCRouter } from "./create-context";
import { accountRouter } from "./account";

export const appRouter = createTRPCRouter({
  account: accountRouter,
});

export type AppRouter = typeof appRouter;
