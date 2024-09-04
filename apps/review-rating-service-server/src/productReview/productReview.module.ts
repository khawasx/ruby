import { Module } from "@nestjs/common";
import { ProductReviewModuleBase } from "./base/productReview.module.base";
import { ProductReviewService } from "./productReview.service";
import { ProductReviewController } from "./productReview.controller";
import { ProductReviewResolver } from "./productReview.resolver";

@Module({
  imports: [ProductReviewModuleBase],
  controllers: [ProductReviewController],
  providers: [ProductReviewService, ProductReviewResolver],
  exports: [ProductReviewService],
})
export class ProductReviewModule {}
