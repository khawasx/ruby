import { SortOrder } from "../../util/SortOrder";

export type ProductReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  product?: SortOrder;
  ratingId?: SortOrder;
  updatedAt?: SortOrder;
};
