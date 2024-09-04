import { MerchantIdTracking } from "../merchantIdTracking/MerchantIdTracking";
import { ProductVariantTracking } from "../productVariantTracking/ProductVariantTracking";

export type Merchant = {
  createdAt: Date;
  id: string;
  merchantIdTrackings?: Array<MerchantIdTracking>;
  productVariantTrackings?: Array<ProductVariantTracking>;
  updatedAt: Date;
};
