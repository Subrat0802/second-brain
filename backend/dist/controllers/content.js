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
const user_1 = require("../models/user");
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const { id } = req.user;
        let payload = {};
        const { contentType, link, title, description, type, tag, image } = req.body;
        if (!title || !description || !contentType) {
            return res.status(400).json({ message: "Content type, Title and description are required" });
        }
        if (contentType === "Link") {
            payload = { contentType, link, title, description, type, tag };
        }
        else if (contentType === "Image") {
            payload = { contentType, title, description, image };
        }
        else if (contentType === "Notes") {
            payload = { contentType, title, description };
        }
        const createContent = yield content_1.contentModel.create(payload);
        if (!createContent) {
            return res.status(404).json({
                message: "Error while creating content, Please try again."
            });
        }
        const addToUser = yield user_1.userModel.findByIdAndUpdate(id, { $push: { content: createContent._id } }, { new: true })
            .populate("content").exec();
        return res.status(201).json({
            message: "Content created successfully",
            data: createContent,
            success: true,
            id: addToUser
        });
    }
    catch (error) {
        let errorMessage = "Something went wrong, server!";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return res.status(500).json({
            message: "Server error while login.",
            success: false,
            error: errorMessage,
        });
    }
});
exports.createContent = createContent;
