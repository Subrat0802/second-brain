import express from "express";
import cookieParser from "cookie-parser";
import { dbconnect } from "./config/dbconnect";
import { authrouter } from "./routes/authroute";
import dotenv from "dotenv";
import cors from "cors";
import { contentRoute } from "./routes/contentRoute";
import { cloudinaryConnect } from "./config/cloudinaryConnect";
import fileUpload from "express-fileupload";
import { collectionRoute } from "./routes/collections";

dotenv.config();

const PORT = process.env.PORT || 3002;


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir: "/temp"
}))
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

dbconnect();
cloudinaryConnect();

app.use("/api/v1/auth", authrouter);
app.use("/api/v1/content", contentRoute );
app.use("/api/v1/collection", collectionRoute)

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
