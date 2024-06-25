import express from "express";
import { home } from "../controllers/user.js";
export const router = express.Router();
router.get("/", home);
