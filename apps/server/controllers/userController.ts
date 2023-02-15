import { Request, Response } from "express";
import { createToken } from "../helpers/createToken";
import jwt from "jsonwebtoken";
import { IUser } from "../models/userModel";
const sendMail = require("../helpers/sendMail");
const User = require("../models/userModel");

export const signupUser = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user: IUser = await User.signup(email, password);
      const token = createToken.activation(user);

      const url = `http://localhost:3000/activate/${token}`;
      await sendMail.sendEmailRegister(email, url, "Activate your account");

      res.status(200).json({ email, token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  },

  activate: async (req: Request, res: Response) => {
    try {
      const { token } = req.body;

      const user = jwt.verify(token, process.env.SECRET_JWT as string);
      const { email, password } = user as IUser;

      const check = await User.findOne({ email });

      if (check)
        return res.status(400).json({ msg: "This email already exists" });

      const newUser = new User({ email, password });

      await newUser.save();

      res.status(200).json({ msg: "Account has been activated!" });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  },
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
