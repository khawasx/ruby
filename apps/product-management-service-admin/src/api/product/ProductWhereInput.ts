import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  gradeCondition?: StringNullableFilter;
  id?: StringFilter;
  memory?: StringNullableFilter;
  size?: StringNullableFilter;
};
