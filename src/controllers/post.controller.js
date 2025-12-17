import { Post, post } from "../models/post.controller.js"

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
        const post = await post.find()
        if (post.length === 0) {
            return res.status(404).json({
                message: "no post available"
            })
        }

        return res.status(200).json({
            message: "here are all the post", post
        })
    } catch (error) {
        res.status(500).josn({
            message: "internal server error"
        })
    }
}
//update a post

//delete a apost