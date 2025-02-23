import express from "express";
import { login, register } from "../controllers/user.js";
import { isuathenticate } from "../middleware/isauthenticate.js";
const router =express.Router();

router.route("/register").post(isuathenticate,register);
router.route("/login").post(login);
export default router;