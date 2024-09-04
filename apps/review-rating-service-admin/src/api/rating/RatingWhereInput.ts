import { StringFilter } from "../../util/StringFilter";
import { ProductReviewListRelationFilter } from "../productReview/ProductReviewListRelationFilter";

export type RatingWhereInput = {
  id?: StringFilter;
  productReviews?: ProductReviewListRelationFilter;
};
