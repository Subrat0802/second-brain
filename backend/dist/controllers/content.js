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
const imageUpload_1 = require("../utils/imageUpload");
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
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
            // payload = { contentType, link, title, description, type, tag };
            payload.link = link;
            payload.type = type;
        }
        else if (contentType === "Image" && ((_b = req.files) === null || _b === void 0 ? void 0 : _b.image)) {
            const uploadImage = yield (0, imageUpload_1.uploadImageToCloudinary)((_c = req.files) === null || _c === void 0 ? void 0 : _c.image, process.env.FOLDER_NAME, 800, 60);
            // payload = { contentType, title, description, image };
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
            message: "Server error while login.",
            success: false,
            error: errorMessage,
        });
    }
});
exports.createContent = createContent;
