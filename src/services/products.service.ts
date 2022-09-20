import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { Product, IProduct } from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<IProduct> {
    const productCreated = await this.model.create(product);
    return productCreated;
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async update(id: number, orderId: any): Promise<void> {
    await this.model.update(id, orderId);
  }
}