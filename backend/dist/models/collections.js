"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const collectionSchema = new mongoose_1.default.Schema({
    collectionName: {
        type: String,
        required: true,
        trim: true
    },
    collections: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Content"
        }],
    description: {
        type: String,
        trim: true
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
exports.collectionModel = mongoose_1.default.model("Collections", collectionSchema);
