import { ProductReviewWhereInput } from "./ProductReviewWhereInput";
import { ProductReviewOrderByInput } from "./ProductReviewOrderByInput";

export type ProductReviewFindManyArgs = {
  where?: ProductReviewWhereInput;
  orderBy?: Array<ProductReviewOrderByInput>;
  skip?: number;
  take?: number;
};
