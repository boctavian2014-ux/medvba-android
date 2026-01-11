import { createTRPCRouter } from "./create-context";
import { exampleRouter } from "./routes/example";
import { zoomRouter } from "./routes/zoom";
import { sessionsRouter } from "./routes/sessions";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  zoom: zoomRouter,
  sessions: sessionsRouter,
});

export type AppRouter = typeof appRouter;
