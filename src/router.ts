import fastifyPlugin from "fastify-plugin";
import { logIn, logOut, refreshToken, signUp, withdraw } from "./handlers";

const router = fastifyPlugin(async (app, options) => {
  app.get("/health-check", () => "OK");

  app.get("/sign-up", signUp);

  app.post("/log-in", logIn);

  app.delete("/log-out", logOut);

  app.delete("/withdraw", withdraw);

  app.get("/refresh-token", refreshToken);
});

export default router;
