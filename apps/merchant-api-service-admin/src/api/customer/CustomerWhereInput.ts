import { StringFilter } from "../../util/StringFilter";
import { ProductVariantTrackingListRelationFilter } from "../productVariantTracking/ProductVariantTrackingListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  productVariantTrackings?: ProductVariantTrackingListRelationFilter;
};
