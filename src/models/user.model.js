import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchem = new Schema(
    {
        username: {
            type: String,
            minlength: 1,
            maxlenght: 20,
            unique: true,
            trim: true,
            lowercase: true,
            require: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 6,
            maxlenght: 20,
        },
        email: {
            type: String,
            require: true,
            lowercase: true,
            unique: true,
            trim: true,
        }
    },

    { timestamps: true };


);