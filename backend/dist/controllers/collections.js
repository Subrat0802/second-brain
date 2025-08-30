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
exports.createCollection = void 0;
const collections_1 = require("../models/collections");
const user_1 = require("../models/user");
const createCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collectionName, description, collections } = req.body;
        //@ts-ignore
        const { id } = req.user || {};
        if (!collectionName || !collections) {
            res.status(400).json({
                message: "Title and collections are required",
                success: false
            });
        }
        const response = yield collections_1.collectionModel.create({
            collectionName,
            description,
            collections,
            createdBy: id
        });
        if (!response) {
            res.status(408).json({
                message: "Collection not created"
            });
        }
        // const user = await userModel.findById(id);
        // if(!user){
        //     return res.status(404).json({
        //         message:"User not present, validation error"
        //     })
        // }
        // user?.collections.push(response._id);
        // await user.save();
        const updatedUser = yield user_1.userModel.findByIdAndUpdate(id, { $addToSet: { collections: response._id } }, //prevent duplication
        { new: true });
        if (!updatedUser) {
            return res.status(404).json({
                message: "User not present, validation error",
            });
        }
        res.status(200).json({
            message: "collection created",
            data: response,
            user: updatedUser
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createCollection = createCollection;
