import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlewares/login.middleware';

const router = Router();
const loginController = new LoginController();

router.post('/login', validateLogin, loginController.login.bind(loginController));

export default router;