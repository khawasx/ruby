import { MerchantIdTrackingUpdateManyWithoutMerchantsInput } from "./MerchantIdTrackingUpdateManyWithoutMerchantsInput";
import { ProductVariantTrackingUpdateManyWithoutMerchantsInput } from "./ProductVariantTrackingUpdateManyWithoutMerchantsInput";

export type MerchantUpdateInput = {
  merchantIdTrackings?: MerchantIdTrackingUpdateManyWithoutMerchantsInput;
  productVariantTrackings?: ProductVariantTrackingUpdateManyWithoutMerchantsInput;
};
