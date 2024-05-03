import { CookieSerializeOptions } from "@fastify/cookie";
import { FastifyRequest } from "fastify";

export function getCookieOptions(req: FastifyRequest): CookieSerializeOptions {
  return {
    domain: req.hostname.split(":")[0],
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
}
