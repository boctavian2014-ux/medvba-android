import { createTRPCRouter } from "./create-context";
import { exampleRouter } from "./routes/example";
import { zoomRouter } from "./routes/zoom";
import { sessionsRouter } from "./routes/sessions";
import { usersRouter } from "./routes/users";
import { studyRoomsRouter } from "./routes/studyRooms";
import { accountRouter } from "./routes/account";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  zoom: zoomRouter,
  sessions: sessionsRouter,
  users: usersRouter,
  studyRooms: studyRoomsRouter,
  account: accountRouter,
});

export type AppRouter = typeof appRouter;
