import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CartUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  status?: "Option1" | null;
};
