import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateProducts from '../middlewares/products.middleware';

const router = Router();
const productController = new ProductController();

router.post('/products', validateProducts, productController.create.bind(productController));
router.get('/products', productController.getAll.bind(productController));

export default router;