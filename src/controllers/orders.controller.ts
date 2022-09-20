import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import OrderService from '../services/orders.service';
import ProductService from '../services/products.service';
import UserService from '../services/users.service';

const userService = new UserService();
const productService = new ProductService();

export default class OrderController {
  constructor(private service = new OrderService()) { }

  public async getAll(req: Request, res: Response) {
    const orders = await this.service.getAll();
    return res.status(200).json(orders);
  }

  public async create(req: Request, res: Response) {
    const token = req.headers.authorization;
    const { productsIds } = req.body;

    if (!token) return;

    try {
      const decoded = verify(token, 'secret');
      const { id } = await userService.getByUsername(decoded);
      const { orderId } = await this.service.create(id);

      await Promise.all(
        productsIds.map((prodId: number) => productService.update(prodId, orderId)),
      );

      res.status(201).json({ userId: id, productsIds });
    } catch (err) {
      res.status(500).json({ message: 'err' });
    }
  }
}