import fastifyCookie from "@fastify/cookie";
import fastify from "fastify";
import router from "./router";

const app = fastify({ logger: true });

app.register(fastifyCookie);
app.register(router);

app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
