import { MerchantIdTracking as TMerchantIdTracking } from "../api/merchantIdTracking/MerchantIdTracking";

export const MERCHANTIDTRACKING_TITLE_FIELD = "product";

export const MerchantIdTrackingTitle = (
  record: TMerchantIdTracking
): string => {
  return record.product?.toString() || String(record.id);
};
