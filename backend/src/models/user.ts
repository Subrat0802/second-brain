import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    content:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserContent"
    }]
})


export const userModel = model("User", userSchema);