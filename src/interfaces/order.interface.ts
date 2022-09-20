export interface Order {
  id?: number;
  userId: number;
  productsIds: number[];
}

export interface OrderId {
  orderId: number;
}