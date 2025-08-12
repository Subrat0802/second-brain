import express from "express";
import { createContent } from "../controllers/content";

export const contentRoute = express.Router();

contentRoute.post("/create", createContent);

