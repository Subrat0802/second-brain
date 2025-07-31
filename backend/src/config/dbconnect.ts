import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbconnect = () => {
    const mongourl = process.env.MONGODB_URL;
    if(!mongourl) {
        console.log("Not fetching Mongo url from env file.");
        process.exit(1);
    }
    mongoose.connect(mongourl)
    .then(() => {
        console.log("DB connected successfully")
    }).catch((error) => {
        console.log(error);
    }) 
}

