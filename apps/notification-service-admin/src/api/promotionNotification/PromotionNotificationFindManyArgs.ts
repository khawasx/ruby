import { PromotionNotificationWhereInput } from "./PromotionNotificationWhereInput";
import { PromotionNotificationOrderByInput } from "./PromotionNotificationOrderByInput";

export type PromotionNotificationFindManyArgs = {
  where?: PromotionNotificationWhereInput;
  orderBy?: Array<PromotionNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
