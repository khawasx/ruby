import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";

export type ProductVariantTrackingUpdateInput = {
  color?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  customerConversionSuccessRate?: number | null;
  customerRefusalSuccessRate?: number | null;
  grade?: string | null;
  merchant?: MerchantWhereUniqueInput | null;
  merchantStarsAtTime?: number | null;
  merchantSuccessRate?: number | null;
  model?: string | null;
  price?: number | null;
  priceAtTime?: number | null;
  product?: string | null;
  size?: string | null;
};
