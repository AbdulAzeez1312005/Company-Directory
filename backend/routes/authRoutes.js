// backend/routes/authRoutes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// @route   POST /auth/signup
// @desc    Register a new user
router.post("/signup", registerUser);

// @route   POST /auth/login
// @desc    Login an existing user
router.post("/login", loginUser);

export default router;
