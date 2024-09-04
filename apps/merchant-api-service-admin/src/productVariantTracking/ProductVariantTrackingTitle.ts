import { ProductVariantTracking as TProductVariantTracking } from "../api/productVariantTracking/ProductVariantTracking";

export const PRODUCTVARIANTTRACKING_TITLE_FIELD = "color";

export const ProductVariantTrackingTitle = (
  record: TProductVariantTracking
): string => {
  return record.color?.toString() || String(record.id);
};
