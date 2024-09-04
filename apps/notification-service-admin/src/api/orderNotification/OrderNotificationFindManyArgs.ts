import { OrderNotificationWhereInput } from "./OrderNotificationWhereInput";
import { OrderNotificationOrderByInput } from "./OrderNotificationOrderByInput";

export type OrderNotificationFindManyArgs = {
  where?: OrderNotificationWhereInput;
  orderBy?: Array<OrderNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
