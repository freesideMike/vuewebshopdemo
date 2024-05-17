import type { IProduct } from "./IProduct";

export interface ICart {
  product: IProduct;
  quantity: number;
}
