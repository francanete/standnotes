import jwt from "jsonwebtoken";

// export const createToken = (_id: string) => {
//   return jwt.sign({ _id }, process.env.SECRET_JWT as string, {
//     expiresIn: "3d",
//   });
// };

export const createToken = {
  activation: (_id: string) => {
    return jwt.sign({ _id }, process.env.SECRET_JWT as string, {
      expiresIn: "15m",
    });
  },
};
