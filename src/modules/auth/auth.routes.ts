 import { Router } from "express";


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { validateSignup,validateSignin } from './auth.validator';

const router = Router();

// Instantiate layers (Dependency Injection)
const repo = new AuthRepository();
const service = new AuthService(repo);
const controller = new AuthController(service);


router.get('/signup', controller.renderSignup);
router.post('/', validateSignup, controller.handleSignup);
router.post('/signin', validateSignin, controller.handleSignin);

export default router;