import { createTRPCRouter } from "./create-context";
import { exampleRouter } from "./routes/example";
import { zoomRouter } from "./routes/zoom";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  zoom: zoomRouter,
});

export type AppRouter = typeof appRouter;
