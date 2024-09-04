import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ProductReviewCreateInput = {
  comment?: string | null;
  customer?: string | null;
  product?: string | null;
  rating?: RatingWhereUniqueInput | null;
};
