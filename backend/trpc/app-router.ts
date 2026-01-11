import { createTRPCRouter } from "./create-context";
import { exampleRouter } from "./routes/example";
import { zoomRouter } from "./routes/zoom";
import { sessionsRouter } from "./routes/sessions";
import { usersRouter } from "./routes/users";
import { studyRoomsRouter } from "./routes/studyRooms";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  zoom: zoomRouter,
  sessions: sessionsRouter,
  users: usersRouter,
  studyRooms: studyRoomsRouter,
});

export type AppRouter = typeof appRouter;
