import express from 'express';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import LoginRouter from './routes/login.routes';

const app = express();
app.use(express.json());

app.use(ProductsRoutes);
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(LoginRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));
