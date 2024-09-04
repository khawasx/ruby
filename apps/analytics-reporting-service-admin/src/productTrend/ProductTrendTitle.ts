import { ProductTrend as TProductTrend } from "../api/productTrend/ProductTrend";

export const PRODUCTTREND_TITLE_FIELD = "id";

export const ProductTrendTitle = (record: TProductTrend): string => {
  return record.id?.toString() || String(record.id);
};
