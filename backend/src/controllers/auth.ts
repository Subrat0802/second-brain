import { Request, Response } from "express";
import { userModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookie from "cookie-parser";
import { parseAsync, ZodError } from "zod";
import { signinValidation, signupValidation } from "../config/zodValidation";

dotenv.config();

export const signup = async (req: Request, res: Response) => {
  try {
    

    const { email, password, username, conPassword } =
      await signupValidation.parseAsync(req.body);
      console.log(email, password, username, conPassword);

    if (!username || !email || !password || !conPassword) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (password != conPassword) {
      return res.status(422).json({
        message: "Wrong password, password does not match",
      });
    }
    console.log("SIGNUP HIT Before");
    const user = await userModel.findOne({ email });
    console.log("SIGNUP HIT AFter");

    if (user) {
      return res.status(409).json({
        message:
          "User is already registered, try with different email address.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!createUser) {
      return res.status(501).json({
        message: "User does not created, please try again.",
        success: false,
      });
    }
    console.log("SIGNUP HIT USER", createUser);
    res.status(200).json({
      message: "User created successfully",
      data: createUser,
      success: true,
    });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        errors: err.issues.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      });
    }

    let errorMessage = "Something went wrong, server!";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return res.status(500).json({
      message: "Internal server error please try again.",
      success: false,
      error: errorMessage,
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = await signinValidation.parseAsync(req.body);
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return res.status(401).json({
        message: "No user found with thins email Please signup first.",
        success: false,
      });
    }

    const checkPasswod = await bcrypt.compare(password, findUser.password);
    if (!checkPasswod) {
      return res.status(401).json({
        message: "Incorrect password",
        success: false,
      });
    }

    const token = jwt.sign(
      { email: findUser.email, id: findUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "24h" }
    );

    const options = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      // httpOnly: true,
    };

    (findUser as any).password = undefined;

    return res.cookie("token", token, options).status(200).json({
      message: "User login successfully",
      success: true,
      data: findUser,
      token: token,
    });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return res.status(400).json({
        errors: err.issues.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      });
    }

    let errorMessage = "Something went wrong, server!";
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return res.status(500).json({
      message: "Internal server error please try again.",
      success: false,
      error: errorMessage,
    });
  }
};

export const getUserData = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const { id } = req?.user;
    const userData = await userModel.findById(id).populate("content")
    .populate("savedItem").populate({
      path: "collections",
      populate: [
        {path: "collections"},
        {path: "createdBy"}
      ]
        
      
  }).exec();
    if (!userData) {
      return res.status(404).json({
        message: "user not found, please re-login.",
      });
    }
    return res.status(200).json({
      message: "All user Data",
      data: userData,
    });
  } catch (error) {
    let errorMessage = "Something went wrong, server!";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.status(500).json({
      message: "Server error while login.",
      success: false,
      error: errorMessage,
    });
  }
};
