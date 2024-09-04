import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";

export type ProductVariantTrackingWhereInput = {
  color?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  customerConversionSuccessRate?: FloatNullableFilter;
  customerRefusalSuccessRate?: FloatNullableFilter;
  grade?: StringNullableFilter;
  id?: StringFilter;
  merchant?: MerchantWhereUniqueInput;
  merchantStarsAtTime?: FloatNullableFilter;
  merchantSuccessRate?: FloatNullableFilter;
  model?: StringNullableFilter;
  price?: FloatNullableFilter;
  priceAtTime?: FloatNullableFilter;
  product?: StringNullableFilter;
  size?: StringNullableFilter;
};
