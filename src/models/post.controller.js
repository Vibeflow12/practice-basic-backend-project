import { mongo, Schema } from "mongoose";

const postSchema = new Schema(
    {
        name: {
            require: true,
            trim: true,
            type: String
        },

        description: {
            type: String,
            require: true,
            trim: true
        },
        age: {
            type: Number,
            require: true,
            min: 1,
            max: 100
        }
    },
    {
        timestamps: true
    }
)

export const Post = mongo.model("Post", postSchema);