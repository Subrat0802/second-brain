import express from "express";
import cookieParser from "cookie-parser";
import { dbconnect } from "./config/dbconnect";
import { authrouter } from "./routes/authroute";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3002;


const app = express();

app.use(express.json());
app.use(cookieParser());

dbconnect();

app.use("/api/v1/auth", authrouter);

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
