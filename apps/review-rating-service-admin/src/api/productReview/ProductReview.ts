import { Rating } from "../rating/Rating";

export type ProductReview = {
  comment: string | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  product: string | null;
  rating?: Rating | null;
  updatedAt: Date;
};
