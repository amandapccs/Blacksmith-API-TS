import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private service = new ProductService()) { }

  public async create(req: Request, res: Response) {
    const { name, amount } = req.body;
    const product = await this.service.create({ name, amount });
    return res.status(201).json(product);
  }

  public async getAll(req: Request, res: Response) {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  }
}