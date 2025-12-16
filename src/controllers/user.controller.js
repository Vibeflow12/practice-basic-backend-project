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
//logout


export { registerUser }