import { ProductReview } from "../productReview/ProductReview";

export type Rating = {
  createdAt: Date;
  id: string;
  productReviews?: Array<ProductReview>;
  updatedAt: Date;
};
