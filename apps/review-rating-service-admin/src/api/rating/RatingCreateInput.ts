import { ProductReviewCreateNestedManyWithoutRatingsInput } from "./ProductReviewCreateNestedManyWithoutRatingsInput";

export type RatingCreateInput = {
  productReviews?: ProductReviewCreateNestedManyWithoutRatingsInput;
};
