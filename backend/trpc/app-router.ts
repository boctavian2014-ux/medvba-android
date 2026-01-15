import { createTRPCRouter } from "./create-context";
import { zoomRouter } from "./routes/zoom";

export const appRouter = createTRPCRouter({
  zoom: zoomRouter,
});

export type AppRouter = typeof appRouter;
