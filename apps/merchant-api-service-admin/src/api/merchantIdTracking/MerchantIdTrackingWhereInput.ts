import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MerchantIdTrackingWhereInput = {
  expectedArrivals?: IntNullableFilter;
  id?: StringFilter;
  merchant?: MerchantWhereUniqueInput;
  noShowPurchases?: IntNullableFilter;
  product?: StringNullableFilter;
  refusedPurchases?: IntNullableFilter;
  successfulPurchases?: IntNullableFilter;
  totalPurchases?: IntNullableFilter;
};
