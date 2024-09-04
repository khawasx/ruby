import { SortOrder } from "../../util/SortOrder";

export type MerchantIdTrackingOrderByInput = {
  createdAt?: SortOrder;
  expectedArrivals?: SortOrder;
  id?: SortOrder;
  merchantId?: SortOrder;
  noShowPurchases?: SortOrder;
  product?: SortOrder;
  refusedPurchases?: SortOrder;
  successfulPurchases?: SortOrder;
  totalPurchases?: SortOrder;
  updatedAt?: SortOrder;
};
