import { OrderNotification as TOrderNotification } from "../api/orderNotification/OrderNotification";

export const ORDERNOTIFICATION_TITLE_FIELD = "id";

export const OrderNotificationTitle = (record: TOrderNotification): string => {
  return record.id?.toString() || String(record.id);
};
