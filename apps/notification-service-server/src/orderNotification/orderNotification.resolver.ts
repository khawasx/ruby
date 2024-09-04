import * as graphql from "@nestjs/graphql";
import { OrderNotificationResolverBase } from "./base/orderNotification.resolver.base";
import { OrderNotification } from "./base/OrderNotification";
import { OrderNotificationService } from "./orderNotification.service";

@graphql.Resolver(() => OrderNotification)
export class OrderNotificationResolver extends OrderNotificationResolverBase {
  constructor(protected readonly service: OrderNotificationService) {
    super(service);
  }
}
