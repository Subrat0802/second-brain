import * as z from "zod";

export const signupValidation = z.object({
    email: z.string().email({message:"Invalid email address"}),
    username: z.string().min(2, {message:"Name must be at least then 2 characters long"}),
    password: z.string().min(8, {message:"Password must be at least 8 characters long"}),
    conPassword: z.string().min(8, {message:"Confirm Password must be at least 8 characters long"}),
}).refine((data) => data.password === data.conPassword, {
    path: ["conPassword"],
    message:"Password do not match"
})

export const signinValidation = z.object({
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(8, {message:"Password must be at least 8 characters long"}),
})