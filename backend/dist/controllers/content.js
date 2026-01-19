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
exports.saveContent = exports.createContent = void 0;
const content_1 = require("../models/content");
const user_1 = require("../models/user");
const imageUpload_1 = require("../utils/imageUpload");
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { id } = req.user || {};
        const { contentType, link, title, description, type, tag } = req.body;
        const image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
        // console.log("FILEE", image, title, description, contentType);
        if (!title || !description || !contentType) {
            return res.status(400).json({ message: "Content type, Title and description are required" });
        }
        let payload = {
            title,
            description,
            contentType
        };
        if (contentType === "Link") {
            payload.link = link;
            payload.type = type;
        }
        else if (contentType === "Image") {
            if (!((_b = req.files) === null || _b === void 0 ? void 0 : _b.image)) {
                return res.status(400).json({ message: "Image file is required for Image content type" });
            }
            const imageFile = Array.isArray(req.files.image) ? req.files.image[0] : req.files.image;
            if (!imageFile.tempFilePath) {
                return res.status(400).json({ message: "Invalid image file format" });
            }
            const uploadImage = yield (0, imageUpload_1.uploadImageToCloudinary)(imageFile, process.env.FOLDER_NAME, 800, 60);
            payload.image = uploadImage.secure_url;
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
            message: "Server error while creating content.",
            success: false,
            error: errorMessage,
        });
    }
});
exports.createContent = createContent;
const saveContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contentId } = req.body;
        const { id } = req.user || {};
        const user = yield user_1.userModel.findOne({ _id: id });
        if (!user) {
            return res.status(401).json({
                message: "User not found, invalid credentials, please login in first."
            });
        }
        if (user.savedItem.includes(contentId)) {
            return res.status(400).json({
                message: "Content already saved.",
            });
        }
        user.savedItem.push(contentId);
        yield user.save();
        return res.status(200).json({
            message: "Item saved successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            messsage: "Server error while saving content"
        });
    }
});
exports.saveContent = saveContent;
