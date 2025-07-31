"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbconnect = () => {
    const mongourl = process.env.MONGODB_URL;
    if (!mongourl) {
        console.log("Not fetching Mongo url from env file.");
        process.exit(1);
    }
    mongoose_1.default.connect(mongourl)
        .then(() => {
        console.log("DB connected successfully");
    }).catch((error) => {
        console.log(error);
    });
};
exports.dbconnect = dbconnect;
