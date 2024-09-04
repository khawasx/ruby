import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CartWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
