import { BusinessPurchaseWhereInput } from "./BusinessPurchaseWhereInput";
import { BusinessPurchaseOrderByInput } from "./BusinessPurchaseOrderByInput";

export type BusinessPurchaseFindManyArgs = {
  where?: BusinessPurchaseWhereInput;
  orderBy?: Array<BusinessPurchaseOrderByInput>;
  skip?: number;
  take?: number;
};
