import { CustomerBehavior as TCustomerBehavior } from "../api/customerBehavior/CustomerBehavior";

export const CUSTOMERBEHAVIOR_TITLE_FIELD = "id";

export const CustomerBehaviorTitle = (record: TCustomerBehavior): string => {
  return record.id?.toString() || String(record.id);
};
