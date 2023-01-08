import { Request, Response } from "express";
import jwt from "jsonwebtoken";
const User = require("../models/userModel");

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET_JWT as string, {
    expiresIn: "3d",
  });
};

// login user

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Something went wrong" });
    }
  }
};

// signup user

export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Something went wrong" });
    }
  }
};

module.exports = { loginUser, signupUser };
