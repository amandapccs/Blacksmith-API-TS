import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateUsers from '../middlewares/users.middleware';

const router = Router();
const userController = new UserController();

router.post('/users', validateUsers, userController.create.bind(userController));

export default router;