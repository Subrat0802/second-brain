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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.signin = exports.signup = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
const zodValidation_1 = require("../config/zodValidation");
dotenv_1.default.config();
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username, conPassword } = yield zodValidation_1.signupValidation.parseAsync(req.body);
        if (!username || !email || !password || !conPassword) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }
        if (password != conPassword) {
            return res.status(422).json({
                message: "Wrong password, password does not match",
            });
        }
        const user = yield user_1.userModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User is already registered, try with different email address.",
                success: false,
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const createUser = yield user_1.userModel.create({
            username,
            email,
            password: hashedPassword,
        });
        if (!createUser) {
            return res.status(501).json({
                message: "User does not created, please try again.",
                success: false,
            });
        }
        res.status(200).json({
            message: "User created successfully",
            data: createUser,
            success: true,
        });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(400).json({
                errors: err.issues.map((e) => ({
                    path: e.path.join("."),
                    message: e.message,
                })),
            });
        }
        let errorMessage = "Something went wrong, server!";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return res.status(500).json({
            message: "Internal server error please try again.",
            success: false,
            error: errorMessage,
        });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = yield zodValidation_1.signinValidation.parseAsync(req.body);
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false,
            });
        }
        const findUser = yield user_1.userModel.findOne({ email });
        if (!findUser) {
            return res.status(401).json({
                message: "No user found with thins email Please signup first.",
                success: false,
            });
        }
        const checkPasswod = yield bcrypt_1.default.compare(password, findUser.password);
        if (!checkPasswod) {
            return res.status(401).json({
                message: "Incorrect password",
                success: false,
            });
        }
        const token = jsonwebtoken_1.default.sign({ email: findUser.email, id: findUser._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        const options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            // httpOnly: true,
        };
        findUser.password = undefined;
        return res.cookie("token", token, options).status(200).json({
            message: "User login successfully",
            success: true,
            data: findUser,
            token: token,
        });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(400).json({
                errors: err.issues.map((e) => ({
                    path: e.path.join("."),
                    message: e.message,
                })),
            });
        }
        let errorMessage = "Something went wrong, server!";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return res.status(500).json({
            message: "Internal server error please try again.",
            success: false,
            error: errorMessage,
        });
    }
});
exports.signin = signin;
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const { id } = req === null || req === void 0 ? void 0 : req.user;
        const userData = yield user_1.userModel.findById(id).populate("content")
            .populate("savedItem").populate({
            path: "collections",
            populate: [
                { path: "collections" },
                { path: "createdBy" }
            ]
        }).exec();
        if (!userData) {
            return res.status(404).json({
                message: "user not found, please re-login.",
            });
        }
        return res.status(200).json({
            message: "All user Data",
            data: userData,
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
exports.getUserData = getUserData;
