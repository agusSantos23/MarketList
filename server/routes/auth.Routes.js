import express from "express";
import { register, login, logout,verifyToken } from "../controllers/auth.Controller.js";
import { validateDataSchema } from "../middlewares/validatorData.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.Controller.js";

const router = express.Router();


router.post('/register', validateDataSchema(registerSchema), register)

router.post('/login', validateDataSchema(loginSchema), login)

router.post('/logout', logout)

router.get('/verify-token', verifyToken)

export default router;