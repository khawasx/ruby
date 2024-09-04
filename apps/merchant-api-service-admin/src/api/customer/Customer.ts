import { ProductVariantTracking } from "../productVariantTracking/ProductVariantTracking";

export type Customer = {
  createdAt: Date;
  id: string;
  productVariantTrackings?: Array<ProductVariantTracking>;
  updatedAt: Date;
};
