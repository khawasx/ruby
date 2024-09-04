import { ProductReview as TProductReview } from "../api/productReview/ProductReview";

export const PRODUCTREVIEW_TITLE_FIELD = "customer";

export const ProductReviewTitle = (record: TProductReview): string => {
  return record.customer?.toString() || String(record.id);
};
