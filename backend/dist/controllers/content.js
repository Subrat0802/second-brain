"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContent = void 0;
const content_1 = require("../models/content");
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let payload = {};
        const { link, title, description, type, tag, image } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }
        if (link) {
            if (!type) {
                return res.status(400).json({ message: "Type is required for link content" });
            }
            payload = { link, title, description, type, tag };
        }
        else if (image) {
            payload = { title, description, image };
        }
        else {
            payload = { title, description };
        }
        const createdContent = yield content_1.contentModel.create(payload);
        return res.status(201).json({
            message: "Content created successfully",
            data: createdContent,
            success: true
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Server error while creating content.",
            success: false,
            error
        });
    }
});
exports.createContent = createContent;
