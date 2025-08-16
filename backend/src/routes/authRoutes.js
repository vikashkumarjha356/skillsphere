import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", protect, getUserProfile);

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
