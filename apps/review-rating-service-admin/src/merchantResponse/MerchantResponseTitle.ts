import { MerchantResponse as TMerchantResponse } from "../api/merchantResponse/MerchantResponse";

export const MERCHANTRESPONSE_TITLE_FIELD = "id";

export const MerchantResponseTitle = (record: TMerchantResponse): string => {
  return record.id?.toString() || String(record.id);
};
