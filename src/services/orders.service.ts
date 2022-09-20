import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import { Order, OrderId } from '../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();

    return orders as Order[];
  }

  public async create(id: number): Promise<OrderId> {
    const orderId = await this.model.create(id);
    return orderId;
  }
}