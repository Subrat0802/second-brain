import { Request, Response } from "express";
import { contentModel } from "../models/content";

export const createContent = async (req: Request, res: Response) => {
  try {
    let payload: any = {};
    const { link, title, description, type, tag, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    if (link) {
      if (!type) {
        return res.status(400).json({ message: "Type is required for link content" });
      }
      payload = { link, title, description, type, tag };
    } 
    else if (image) {
      payload = { title, description, image };
    } 
    else {
      payload = { title, description };
    }

    const createdContent = await contentModel.create(payload);

    return res.status(201).json({
      message: "Content created successfully",
      data: createdContent,
      success: true
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error while creating content.",
      success: false,
      error
    });
  }
};
