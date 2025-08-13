import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const {token} = req.cookies;
        if(!token){
            return res.status(404).json({
                message:"Token is missing, Please signin first."
            })
        }
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        //@ts-ignore
        req.user = decode;

        next();
    }catch(error){
        return res.status(500).json({
            message: "Server error while validating token",
            error: error instanceof Error ? error.message : error
        })
    }
}