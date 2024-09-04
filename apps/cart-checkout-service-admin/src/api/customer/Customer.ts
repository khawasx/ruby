import { Cart } from "../cart/Cart";

export type Customer = {
  carts?: Array<Cart>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
