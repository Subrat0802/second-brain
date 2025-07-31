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
dotenv_1.default.config();
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
(0, dbconnect_1.dbconnect)();
app.use("/api/v1/auth", authroute_1.authrouter);
app.get("/", (req, res) => {
    res.send("Hi there");
});
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
