import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionNotificationServiceBase } from "./base/promotionNotification.service.base";

@Injectable()
export class PromotionNotificationService extends PromotionNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
