import express from "express";
import { forgotPassword, resetPassword } from "../controllers/user.controller.js"; // <-- yahi change hai

const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
