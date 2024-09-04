import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConversionRateServiceBase } from "./base/conversionRate.service.base";

@Injectable()
export class ConversionRateService extends ConversionRateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
