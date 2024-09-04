import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderNotificationServiceBase } from "./base/orderNotification.service.base";

@Injectable()
export class OrderNotificationService extends OrderNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
