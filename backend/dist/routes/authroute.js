"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authrouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const middleware_1 = require("../middleware/middleware");
exports.authrouter = express_1.default.Router();
exports.authrouter.post("/signup", auth_1.signup);
exports.authrouter.post("/signin", auth_1.signin);
exports.authrouter.get("/getUserData", middleware_1.isUser, auth_1.getUserData);
