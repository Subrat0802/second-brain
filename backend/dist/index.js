"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dbconnect_1 = require("./config/dbconnect");
const authroute_1 = require("./routes/authroute");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const contentRoute_1 = require("./routes/contentRoute");
const cloudinaryConnect_1 = require("./config/cloudinaryConnect");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const collections_1 = require("./routes/collections");
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: path_1.default.join(os_1.default.tmpdir(), "second-brain-uploads")
}));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND,
    credentials: true
}));
(0, dbconnect_1.dbconnect)();
(0, cloudinaryConnect_1.cloudinaryConnect)();
app.use("/api/v1/auth", authroute_1.authrouter);
app.use("/api/v1/content", contentRoute_1.contentRoute);
app.use("/api/v1/collection", collections_1.collectionRoute);
app.get("/", (req, res) => {
    res.send("Hi there");
});
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
