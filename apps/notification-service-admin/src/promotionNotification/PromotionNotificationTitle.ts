import { PromotionNotification as TPromotionNotification } from "../api/promotionNotification/PromotionNotification";

export const PROMOTIONNOTIFICATION_TITLE_FIELD = "id";

export const PromotionNotificationTitle = (
  record: TPromotionNotification
): string => {
  return record.id?.toString() || String(record.id);
};
