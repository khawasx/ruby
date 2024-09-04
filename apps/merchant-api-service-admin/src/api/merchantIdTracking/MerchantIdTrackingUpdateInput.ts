import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";

export type MerchantIdTrackingUpdateInput = {
  expectedArrivals?: number | null;
  merchant?: MerchantWhereUniqueInput | null;
  noShowPurchases?: number | null;
  product?: string | null;
  refusedPurchases?: number | null;
  successfulPurchases?: number | null;
  totalPurchases?: number | null;
};
