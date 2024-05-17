import type { ICart } from "./ICart";
import type { IProduct } from "./IProduct";

export interface IWebshopState { 
  products: IProduct[];
  cart: ICart[]
}