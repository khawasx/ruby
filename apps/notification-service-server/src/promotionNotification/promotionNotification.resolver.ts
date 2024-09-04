import * as graphql from "@nestjs/graphql";
import { PromotionNotificationResolverBase } from "./base/promotionNotification.resolver.base";
import { PromotionNotification } from "./base/PromotionNotification";
import { PromotionNotificationService } from "./promotionNotification.service";

@graphql.Resolver(() => PromotionNotification)
export class PromotionNotificationResolver extends PromotionNotificationResolverBase {
  constructor(protected readonly service: PromotionNotificationService) {
    super(service);
  }
}
