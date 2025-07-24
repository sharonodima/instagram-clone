import express from "express";
import { login, register } from "../controllers/auth.controller";

const router = express.Router();

// POST /api/auth/register
router.post("/register", register);
router.post("/login", login);

export default router;