import { MerchantResponseWhereInput } from "./MerchantResponseWhereInput";
import { MerchantResponseOrderByInput } from "./MerchantResponseOrderByInput";

export type MerchantResponseFindManyArgs = {
  where?: MerchantResponseWhereInput;
  orderBy?: Array<MerchantResponseOrderByInput>;
  skip?: number;
  take?: number;
};
