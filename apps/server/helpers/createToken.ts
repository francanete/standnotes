import jwt from "jsonwebtoken";
import { IUser } from "../models/userModel";

require("dotenv").config();

const { SECRET_JWT } = process.env;

export const createToken = {
  activation: (user: IUser) => {
    return jwt.sign(user, SECRET_JWT as string, {
      expiresIn: "15m",
    });
  },
  login: (_id: string) => {
    return jwt.sign({ _id }, SECRET_JWT as string, {
      expiresIn: "7d",
    });
  },
};
