const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

import { NextFunction, Request, Response } from "express";

interface CustomRequest extends Request {
  user: string;
}

const requireAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in ONE" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET_JWT);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "You must be logged in" });
  }
};

module.exports = requireAuth;
