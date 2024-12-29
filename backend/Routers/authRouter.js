import express from 'express';
import { loginUser, registerUser,getTotalUsers } from '../Controllers/authController.js';

const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getUsers",getTotalUsers)

export default router