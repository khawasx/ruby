import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessPurchaseServiceBase } from "./base/businessPurchase.service.base";

@Injectable()
export class BusinessPurchaseService extends BusinessPurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
