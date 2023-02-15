import { Request, Response } from "express";
import { createToken } from "../helpers/createToken";
const User = require("../models/userModel");

export const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken.activation(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken.activation(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { loginUser, signupUser };
