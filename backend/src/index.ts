import express from "express";
import cookieParser from "cookie-parser";
import { dbconnect } from "./config/dbconnect";
import { authrouter } from "./routes/authroute";
import dotenv from "dotenv";
import cors from "cors";
import { contentRoute } from "./routes/contentRoute";

dotenv.config();

const PORT = process.env.PORT || 3002;


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

dbconnect();

app.use("/api/v1/auth", authrouter);
app.use("/api/v1/content", contentRoute );

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
