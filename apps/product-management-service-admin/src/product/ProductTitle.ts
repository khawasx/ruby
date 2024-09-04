import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "gradeCondition";

export const ProductTitle = (record: TProduct): string => {
  return record.gradeCondition?.toString() || String(record.id);
};
