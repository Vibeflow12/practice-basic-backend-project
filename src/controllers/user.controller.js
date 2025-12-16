import { request } from 'express';
import { User } from '../models/user.model.js';

//register 
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        //basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }
        // check if user already exist
        const existing = await User.findOne({ email: email.toLowerCase() })
        if (existing) {
            return res.status(400).json({ message: "user already exist" })
        };
        //if user not exist create user profile
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password
        });
        //res user has been created
        res.status(201).json({
            message: "user registered",
            user: { id: user._id, email: user.email, password: user.password }
        })
    } catch (error) {
        res.status(500).json({ message: "internal server error", error: error.message })

    }

}
//login
// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({
//             email: email.toLowerCase()

//         })

//         if (!user) return res.status(400).json({ message: "user not found" });

//         const isMatch = await user.comparePassword(password);
//         if (!isMatch) return res.status(400).json({
//             message: "invalid credentilas"
//         })

//         res.status(200).json({
//             message: "user logged in",
//             user: {
//                 id: user._id,
//                 email: user.email,
//                 username: user.username
//             }
//         })

//     } catch (error) {
//         res.status(500).json({ message: "internal server error", error: error.message })

//     }
// }

const loginUser = async (req, res) => {
    try {

        //checking if already exists
        const { email, password } = req.body;

        const user = await User.findOne({
            email: email.toLowerCase().trim()
        }).select("+password")
        console.log(email, password);

        // if (!user) return res.status(400).json({
        //     message: "user not found"
        // });


        //comapair password
        const isMatch = await user.comparePassword(password);
        console.log(password);
        if (!isMatch) return res.status(400).json({
            message: "invalid credentials"
        });

        res.status(200).json({
            message: "user Logged in",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })

    }
}

//logout


export { registerUser, loginUser }