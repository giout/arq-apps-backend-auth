import { Router } from 'express';
import { validate } from '../middlewares/index.js';
import { loginSchema, registerSchema, verifySchema } from '../validations/index.js';
import { authController } from '../controllers/index.js';
// import passport from 'passport';

const router = Router();

router.post('/login', validate(loginSchema), authController.login);
router.post('/register', validate(registerSchema), authController.register);
router.post('/verify', validate(verifySchema), authController.verify)

export default router;
