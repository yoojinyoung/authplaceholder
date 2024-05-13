// import { NextFunction, Request, Response } from "express";
// import CError from "../error/error";
// import userModel from "../models/user.model";

import { NextHandleFunction } from "@fastify/middie";

const middleware: NextHandleFunction = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) return next();

    // const user = await userModel.getUserByAccessToken(accessToken);
    // if (!user) throw new CError("Invalid accessToken", 400);

    // req.user = user;

    next();
  } catch (e) {
    next(e);
  }
};

export default middleware;
