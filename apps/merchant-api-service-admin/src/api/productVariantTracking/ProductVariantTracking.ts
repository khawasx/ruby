import { Customer } from "../customer/Customer";
import { Merchant } from "../merchant/Merchant";

export type ProductVariantTracking = {
  color: string | null;
  createdAt: Date;
  customer?: Customer | null;
  customerConversionSuccessRate: number | null;
  customerRefusalSuccessRate: number | null;
  grade: string | null;
  id: string;
  merchant?: Merchant | null;
  merchantStarsAtTime: number | null;
  merchantSuccessRate: number | null;
  model: string | null;
  price: number | null;
  priceAtTime: number | null;
  product: string | null;
  size: string | null;
  updatedAt: Date;
};
