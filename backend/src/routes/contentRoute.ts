import express from "express";
import { createContent, saveContent } from "../controllers/content";
import { isUser } from "../middleware/middleware";

export const contentRoute = express.Router();

contentRoute.post("/create", isUser, createContent);
contentRoute.post("/save", isUser, saveContent);

