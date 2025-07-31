import express from "express"
import { signin, signup } from "../controllers/auth";

export const authrouter = express.Router();

authrouter.post("/signup", signup);
authrouter.post("/signin", signin);

