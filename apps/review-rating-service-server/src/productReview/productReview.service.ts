import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductReviewServiceBase } from "./base/productReview.service.base";

@Injectable()
export class ProductReviewService extends ProductReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
