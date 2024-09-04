import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductTrendServiceBase } from "./base/productTrend.service.base";

@Injectable()
export class ProductTrendService extends ProductTrendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
