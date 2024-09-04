import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MerchantIdTrackingServiceBase } from "./base/merchantIdTracking.service.base";

@Injectable()
export class MerchantIdTrackingService extends MerchantIdTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
