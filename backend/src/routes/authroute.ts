import express from "express"
import { getUserData, signin, signup } from "../controllers/auth";
import { isUser } from "../middleware/middleware";

export const authrouter = express.Router();

authrouter.post("/signup", signup);
authrouter.post("/signin", signin);
authrouter.get("/getUserData", isUser, getUserData)

