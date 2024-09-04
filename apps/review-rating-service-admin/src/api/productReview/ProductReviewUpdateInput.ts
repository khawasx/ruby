import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type ProductReviewUpdateInput = {
  comment?: string | null;
  customer?: string | null;
  product?: string | null;
  rating?: RatingWhereUniqueInput | null;
};
