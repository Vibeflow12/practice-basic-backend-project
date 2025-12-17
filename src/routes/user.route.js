import { Router } from "express";
import { registerUser, loginUser, logOut } from "../controllers/user.controller.js";

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logOut)



export default router