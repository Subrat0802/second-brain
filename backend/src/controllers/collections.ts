import { Request, Response } from "express";
import { collectionModel } from "../models/collections";
import { userModel } from "../models/user";


export const createCollection = async (req:Request, res:Response) => {
    try{
        const {collectionName, description, collections} = req.body;
        //@ts-ignore
        const {id} = req.user || {}
        if(!collectionName || !collections){
            res.status(400).json({
                message:"Title and collections are required",
                success:false
            })
        }

        const response = await collectionModel.create({
            collectionName,
            description,
            collections,
            createdBy:id
        }) 

        if(!response){
            res.status(408).json({
                message:"Collection not created"
            })
        }

        // const user = await userModel.findById(id);
        // if(!user){
        //     return res.status(404).json({
        //         message:"User not present, validation error"
        //     })
        // }
        // user?.collections.push(response._id);
        // await user.save();

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            { $addToSet: { collections: response._id } }, //prevent duplication
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not present, validation error",
            });
        }

        res.status(200).json({
            message:"collection created",
            data:response,
            user:updatedUser
        })
    }catch(error){
        console.log(error);
    }
}