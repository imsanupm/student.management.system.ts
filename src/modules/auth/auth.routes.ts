 import { Router } from "express";
// import {AuthController} from "./auth.controller"
// const router = Router();


// router.post("/", Auth.handleSignup);


// export default router;



import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { validateSignup } from './auth.validator';

const router = Router();

// Instantiate layers (Dependency Injection)
const repo = new AuthRepository();
const service = new AuthService(repo);
const controller = new AuthController(service);

// GET signup page
router.get('/signup', controller.renderSignup);

// POST signup with validation middleware
router.post('/', validateSignup, controller.handleSignup);

export default router;