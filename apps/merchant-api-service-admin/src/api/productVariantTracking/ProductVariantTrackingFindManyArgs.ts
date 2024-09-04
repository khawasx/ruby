import { ProductVariantTrackingWhereInput } from "./ProductVariantTrackingWhereInput";
import { ProductVariantTrackingOrderByInput } from "./ProductVariantTrackingOrderByInput";

export type ProductVariantTrackingFindManyArgs = {
  where?: ProductVariantTrackingWhereInput;
  orderBy?: Array<ProductVariantTrackingOrderByInput>;
  skip?: number;
  take?: number;
};
