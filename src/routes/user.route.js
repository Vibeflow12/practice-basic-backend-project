import { Router } from "express";
import { hw } from "../controllers/user.controller.js";

const router = Router();
router.route('/he').get(hw)

export default router