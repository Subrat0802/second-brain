import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    collectionName:{
        type: String,
        required:true,
        trim: true
    },
    collections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Content"
    }],
    description:{
        type:String,
        trim:true
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, {timestamps:true})

export const collectionModel = mongoose.model("Collections", collectionSchema);