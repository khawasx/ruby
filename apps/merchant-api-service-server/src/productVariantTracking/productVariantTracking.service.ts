import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductVariantTrackingServiceBase } from "./base/productVariantTracking.service.base";

@Injectable()
export class ProductVariantTrackingService extends ProductVariantTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
