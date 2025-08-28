import { Request, Response } from "express";
import { contentModel } from "../models/content";
import { userModel } from "../models/user";
import { uploadImageToCloudinary } from "../utils/imageUpload";
import { FileArray } from "express-fileupload";

export interface AuthRequest extends Request {
  user?: { id: string };
  files?: any;  
}

export const createContent = async (req: AuthRequest, res: Response) => {
  try {
    const {id} = req.user || {}; 
    const { contentType, link, title, description, type, tag } = req.body;
    const image = req.files?.image;
    // console.log("FILEE", image, title, description, contentType);

    if (!title || !description || !contentType) {
      return res.status(400).json({ message: "Content type, Title and description are required" });
    }

    let payload: any = {
      title,
      description,
      contentType
    }

    if (contentType === "Link") {
      // payload = { contentType, link, title, description, type, tag };
      payload.link = link;
      payload.type = type;
    } 
    else if (contentType === "Image" && req.files?.image) {
      const uploadImage = await uploadImageToCloudinary(req.files?.image, process.env.FOLDER_NAME, 800, 60);
      // payload = { contentType, title, description, image };
      payload.image = uploadImage.secure_url;
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
      message: "Server error while creating content.",
      success: false,
      error: errorMessage,
    })
  }
};




export const saveContent = async (req:AuthRequest, res:Response) => {
  try{
    const {contentId} = req.body;
    const {id} = req.user || {};
    
    const user = await userModel.findOne({_id:id});
    if(!user) {
      return res.status(401).json({
        message:"User not found, invalid credentials, please login in first."
      })
    }

    if (user.savedItem.includes(contentId)) {
      return res.status(400).json({
        message: "Content already saved.",
      });
    }

    user.savedItem.push(contentId);
    await user.save();

    return res.status(200).json({
      message:"Item saved successfully"
    })
  }catch(error){
     return res.status(500).json({
      messsage:"Server error while saving content"
     })
  }
}