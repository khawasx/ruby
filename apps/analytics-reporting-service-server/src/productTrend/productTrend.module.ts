import { Module } from "@nestjs/common";
import { ProductTrendModuleBase } from "./base/productTrend.module.base";
import { ProductTrendService } from "./productTrend.service";
import { ProductTrendController } from "./productTrend.controller";
import { ProductTrendResolver } from "./productTrend.resolver";

@Module({
  imports: [ProductTrendModuleBase],
  controllers: [ProductTrendController],
  providers: [ProductTrendService, ProductTrendResolver],
  exports: [ProductTrendService],
})
export class ProductTrendModule {}
