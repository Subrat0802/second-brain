import mongoose, { model } from "mongoose";

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        enum:["Youtube", "Instagram", "X", "Facebook", "Image", "Link", "Notes"],
        required:true
    },
    Link:{
        type:String,
        required:true
    }
})

export const contentModel = model("Content", contentSchema);