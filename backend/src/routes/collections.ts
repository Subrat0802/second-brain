import express from "express";
import { isUser } from "../middleware/middleware";
import { createCollection } from "../controllers/collections";

export const collectionRoute = express.Router();

collectionRoute.post("/create", isUser, createCollection)