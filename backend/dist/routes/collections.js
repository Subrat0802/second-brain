"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionRoute = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware/middleware");
const collections_1 = require("../controllers/collections");
exports.collectionRoute = express_1.default.Router();
exports.collectionRoute.post("/create", middleware_1.isUser, collections_1.createCollection);
