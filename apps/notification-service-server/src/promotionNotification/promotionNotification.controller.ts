import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromotionNotificationService } from "./promotionNotification.service";
import { PromotionNotificationControllerBase } from "./base/promotionNotification.controller.base";

@swagger.ApiTags("promotionNotifications")
@common.Controller("promotionNotifications")
export class PromotionNotificationController extends PromotionNotificationControllerBase {
  constructor(protected readonly service: PromotionNotificationService) {
    super(service);
  }
}
