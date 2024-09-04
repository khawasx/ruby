import { Module } from "@nestjs/common";
import { ProductVariantTrackingModuleBase } from "./base/productVariantTracking.module.base";
import { ProductVariantTrackingService } from "./productVariantTracking.service";
import { ProductVariantTrackingController } from "./productVariantTracking.controller";
import { ProductVariantTrackingResolver } from "./productVariantTracking.resolver";

@Module({
  imports: [ProductVariantTrackingModuleBase],
  controllers: [ProductVariantTrackingController],
  providers: [ProductVariantTrackingService, ProductVariantTrackingResolver],
  exports: [ProductVariantTrackingService],
})
export class ProductVariantTrackingModule {}
