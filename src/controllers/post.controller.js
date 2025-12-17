import { Post } from "../models/post.controller.js"

//create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        const post = await Post.create({ name, description, age });
        res.status(200).json({
            message: "post has been created", post
        });
    } catch (error) {
        res.status(500).josn({
            message: "internal server error"
        })
    }
}
//get all post
const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        if (posts.length === 0) {
            return res.status(404).json({
                message: "no post available"
            })
        }

        return res.status(200).json({
            message: "here are all the post", posts
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error", error: error.message
        })
    }
}
//update a post
const updatePost = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "no data provided for update"
            })
        };

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!post) return res.status(404).json({
            message: "no post found"
        });

        return res.status(200).json({
            message: "post has been updated", post
        });
    } catch (error) {
        return res.status(500).json({
            message: "internal server error", message: error.message
        })

    }
}
//delete a post

const deletePost = async (req, res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).json({
            message: "cannot delete post"
        })

        return res.status(200).json({
            message: "post got deleted"
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

export { createPost, updatePost, deletePost, getPost };