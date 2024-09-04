import { ProductTrendWhereInput } from "./ProductTrendWhereInput";
import { ProductTrendOrderByInput } from "./ProductTrendOrderByInput";

export type ProductTrendFindManyArgs = {
  where?: ProductTrendWhereInput;
  orderBy?: Array<ProductTrendOrderByInput>;
  skip?: number;
  take?: number;
};
