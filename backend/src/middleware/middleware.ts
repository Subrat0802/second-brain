import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. Please signin first.",
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    // @ts-ignore
    req.user = decode;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
