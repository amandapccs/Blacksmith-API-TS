export interface Product {
  name: string;
  amount: number;
}

export interface IProduct extends Product {
  id: number;
}