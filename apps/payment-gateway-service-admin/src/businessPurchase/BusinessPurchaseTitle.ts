import { BusinessPurchase as TBusinessPurchase } from "../api/businessPurchase/BusinessPurchase";

export const BUSINESSPURCHASE_TITLE_FIELD = "id";

export const BusinessPurchaseTitle = (record: TBusinessPurchase): string => {
  return record.id?.toString() || String(record.id);
};
