import { NextFunction, Request, Response } from "express";
import { createToken } from "../helpers/createToken";
import jwt from "jsonwebtoken";
import { IUser } from "../models/userModel";
const sendMail = require("../helpers/sendMail");
const User = require("../models/userModel");

export const userController = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user: IUser = await User.signup(email, password);
      const tokenActivation = createToken.activation(user);

      const url = `${process.env.CLIENT_BASE_URL}/activation/${tokenActivation}`;
      await sendMail.sendEmailRegister(email, url, "Activate your account");

      res.status(200).json({ email, tokenActivation });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  },

  activate: async (
    req: {
      body: { tokenActivation: string };
    },
    res: Response
  ) => {
    try {
      const { tokenActivation } = req.body;

      const user = jwt.verify(
        tokenActivation,
        process.env.SECRET_JWT as string
      );
      const { email, password } = user as IUser;

      const isExistingUser = await User.findOne({ email });

      if (isExistingUser)
        return res.status(400).json({ error: "This email already exists" });

      const newUser = new User({ email, password });

      await newUser.save();

      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await User.login(email, password);
      const token = createToken.login(user._id);
      res.status(200).json({ email, token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  },

  update: async (
    req: {
      file: { path: string };
      userId: string;
    },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.userId;

      if (req.file) {
        const avatarUrl = req.file.path;

        const user = await User.findByIdAndUpdate(
          userId,
          { avatar: avatarUrl },
          { new: true }
        );
        res.json(user);
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = { userController };
