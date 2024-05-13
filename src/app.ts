import fastifyCookie from "@fastify/cookie";
import fastifyMiddie from "@fastify/middie";
import fastify from "fastify";
import middleware from "./middleware";
import router from "./router";

async function main() {
  const app = fastify({ logger: true });

  await app.register(fastifyMiddie);
  app.register(fastifyCookie);
  app.register(router);

  app.use(middleware);

  app.listen({ port: 3000 }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
}

main();
