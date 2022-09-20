import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import validateOrders from '../middlewares/orders.middleware';
import validateToken from '../middlewares/validate.token.middleware';

const router = Router();
const orderController = new OrderController();

router.get('/orders', orderController.getAll.bind(orderController));
router.post('/orders', validateToken, validateOrders, orderController.create.bind(orderController));

export default router;