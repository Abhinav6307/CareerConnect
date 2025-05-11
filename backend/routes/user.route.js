import express from "express";
import { login, logout, register, updateProfile, forgotPassword, resetPassword  } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
import { sendOTP, verifyOTP } from "../controllers/otp.controller.js";
 
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

// 🆕 OTP routes
router.route("/send-otp").post(sendOTP);
router.route("/verify-otp").post(verifyOTP); // Optional but useful

// 🆕 Forgot Password Routes
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword); 



export default router;
