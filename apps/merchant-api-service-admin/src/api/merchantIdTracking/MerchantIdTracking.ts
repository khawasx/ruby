import { Merchant } from "../merchant/Merchant";

export type MerchantIdTracking = {
  createdAt: Date;
  expectedArrivals: number | null;
  id: string;
  merchant?: Merchant | null;
  noShowPurchases: number | null;
  product: string | null;
  refusedPurchases: number | null;
  successfulPurchases: number | null;
  totalPurchases: number | null;
  updatedAt: Date;
};
