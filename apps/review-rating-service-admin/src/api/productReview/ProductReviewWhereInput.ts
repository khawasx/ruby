import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ProductReviewWhereInput = {
  comment?: StringNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  product?: StringNullableFilter;
  rating?: RatingWhereUniqueInput;
};
