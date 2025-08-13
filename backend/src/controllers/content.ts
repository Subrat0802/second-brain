import { Request, Response } from "express";
import { contentModel } from "../models/content";
import { userModel } from "../models/user";

export const createContent = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const {id} = req.user;
    let payload: any = {};
    const { contentType, link, title, description, type, tag, image } = req.body;

    if (!title || !description || !contentType) {
      return res.status(400).json({ message: "Content type, Title and description are required" });
    }

    if (contentType === "Link") {
      payload = { contentType, link, title, description, type, tag };
    } 
    else if (contentType === "Image") {
      payload = { contentType, title, description, image };
    } 
    else if (contentType === "Notes"){
      payload = { contentType, title, description };
    }

    const createContent = await contentModel.create(payload);

    if(!createContent) {
      return res.status(404).json({
        message:"Error while creating content, Please try again."
      })
    }

    const addToUser = await userModel.findByIdAndUpdate(
      id, 
      {$push: {content: createContent._id}},
      {new:true})
      .populate("content").exec();

    return res.status(201).json({
      message: "Content created successfully",
      data: createContent,
      success: true,
      id:addToUser
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
    })
  }
};
