import express from "express";
import { registerUser, loginUser, me } from "../controllers/authController.js";
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", me);


export default router;