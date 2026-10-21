import express from "express";
import { signup, login, logout, updateProfile, deleteProfilePicture, } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile",protectRoute, upload.single("profilePic"), updateProfile);
router.delete("/profile-picture", protectRoute, deleteProfilePicture);

router.get("/check", protectRoute, (req,res) => res.status(200).json(req.user));

export default router;