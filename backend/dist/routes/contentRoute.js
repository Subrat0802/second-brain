"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRoute = void 0;
const express_1 = __importDefault(require("express"));
const content_1 = require("../controllers/content");
const middleware_1 = require("../middleware/middleware");
exports.contentRoute = express_1.default.Router();
exports.contentRoute.post("/create", middleware_1.isUser, content_1.createContent);
exports.contentRoute.post("/save", middleware_1.isUser, content_1.saveContent);
