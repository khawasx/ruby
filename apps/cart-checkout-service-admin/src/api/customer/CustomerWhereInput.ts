import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  carts?: CartListRelationFilter;
  id?: StringFilter;
};
