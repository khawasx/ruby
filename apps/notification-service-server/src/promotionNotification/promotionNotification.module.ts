import { Module } from "@nestjs/common";
import { PromotionNotificationModuleBase } from "./base/promotionNotification.module.base";
import { PromotionNotificationService } from "./promotionNotification.service";
import { PromotionNotificationController } from "./promotionNotification.controller";
import { PromotionNotificationResolver } from "./promotionNotification.resolver";

@Module({
  imports: [PromotionNotificationModuleBase],
  controllers: [PromotionNotificationController],
  providers: [PromotionNotificationService, PromotionNotificationResolver],
  exports: [PromotionNotificationService],
})
export class PromotionNotificationModule {}
