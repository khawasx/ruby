import { StringFilter } from "../../util/StringFilter";
import { MerchantIdTrackingListRelationFilter } from "../merchantIdTracking/MerchantIdTrackingListRelationFilter";
import { ProductVariantTrackingListRelationFilter } from "../productVariantTracking/ProductVariantTrackingListRelationFilter";

export type MerchantWhereInput = {
  id?: StringFilter;
  merchantIdTrackings?: MerchantIdTrackingListRelationFilter;
  productVariantTrackings?: ProductVariantTrackingListRelationFilter;
};
