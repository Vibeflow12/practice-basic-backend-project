import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
        username: {
            type: String,
            minlength: 1,
            maxlength: 20,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        }
    },

    { timestamps: true }

);

export const User = mongoose.model("User", userSchema)