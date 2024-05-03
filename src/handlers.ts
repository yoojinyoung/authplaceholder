import { FastifyReply, FastifyRequest } from "fastify";
import { getCookieOptions } from "./utils";

export async function signUp(req: FastifyRequest, res: FastifyReply) {
  res.setCookie("accessToken", "hello", getCookieOptions(req));
  res.setCookie("refreshToken", "world", getCookieOptions(req));

  return;
}

export function logIn(req: FastifyRequest, res: FastifyReply) {
  res.setCookie("accessToken", "hello", getCookieOptions(req));
  res.setCookie("refreshToken", "world", getCookieOptions(req));

  return;
}

export function logOut(req: FastifyRequest, res: FastifyReply) {
  res.clearCookie("accessToken", getCookieOptions(req));
  res.clearCookie("refreshToken", getCookieOptions(req));

  return;
}

export function withdraw(req: FastifyRequest, res: FastifyReply) {
  res.clearCookie("accessToken", getCookieOptions(req));
  res.clearCookie("refreshToken", getCookieOptions(req));

  return;
}

export function refreshToken(req: FastifyRequest, res: FastifyReply) {
  res.setCookie("accessToken", "hello", getCookieOptions(req));
  res.setCookie("refreshToken", "world", getCookieOptions(req));

  return;
}
