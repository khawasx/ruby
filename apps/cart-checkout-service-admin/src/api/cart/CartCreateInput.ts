import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CartCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  status?: "Option1" | null;
};
