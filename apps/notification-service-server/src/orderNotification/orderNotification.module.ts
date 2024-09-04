import { Module } from "@nestjs/common";
import { OrderNotificationModuleBase } from "./base/orderNotification.module.base";
import { OrderNotificationService } from "./orderNotification.service";
import { OrderNotificationController } from "./orderNotification.controller";
import { OrderNotificationResolver } from "./orderNotification.resolver";

@Module({
  imports: [OrderNotificationModuleBase],
  controllers: [OrderNotificationController],
  providers: [OrderNotificationService, OrderNotificationResolver],
  exports: [OrderNotificationService],
})
export class OrderNotificationModule {}
