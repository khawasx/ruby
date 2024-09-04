import { SortOrder } from "../../util/SortOrder";

export type ProductVariantTrackingOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  customerConversionSuccessRate?: SortOrder;
  customerRefusalSuccessRate?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  merchantId?: SortOrder;
  merchantStarsAtTime?: SortOrder;
  merchantSuccessRate?: SortOrder;
  model?: SortOrder;
  price?: SortOrder;
  priceAtTime?: SortOrder;
  product?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
