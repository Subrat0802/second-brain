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
import os from "os";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3002;


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir: path.join(os.tmpdir(), "second-brain-uploads")
}))

const allowedOrigins = [
  process.env.FRONTEND,                 
  "http://localhost:5173",               
  "http://localhost:3000",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (origin === process.env.FRONTEND) {
        return callback(null, true);
      }
      if (origin.startsWith("http://localhost")) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);



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
