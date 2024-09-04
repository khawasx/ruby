import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderNotificationService } from "./orderNotification.service";
import { OrderNotificationControllerBase } from "./base/orderNotification.controller.base";

@swagger.ApiTags("orderNotifications")
@common.Controller("orderNotifications")
export class OrderNotificationController extends OrderNotificationControllerBase {
  constructor(protected readonly service: OrderNotificationService) {
    super(service);
  }
}
