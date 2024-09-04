import { MerchantIdTrackingCreateNestedManyWithoutMerchantsInput } from "./MerchantIdTrackingCreateNestedManyWithoutMerchantsInput";
import { ProductVariantTrackingCreateNestedManyWithoutMerchantsInput } from "./ProductVariantTrackingCreateNestedManyWithoutMerchantsInput";

export type MerchantCreateInput = {
  merchantIdTrackings?: MerchantIdTrackingCreateNestedManyWithoutMerchantsInput;
  productVariantTrackings?: ProductVariantTrackingCreateNestedManyWithoutMerchantsInput;
};
