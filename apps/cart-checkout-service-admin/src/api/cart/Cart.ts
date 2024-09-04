import { Customer } from "../customer/Customer";

export type Cart = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
