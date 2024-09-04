import { Module } from "@nestjs/common";
import { BusinessPurchaseModuleBase } from "./base/businessPurchase.module.base";
import { BusinessPurchaseService } from "./businessPurchase.service";
import { BusinessPurchaseController } from "./businessPurchase.controller";
import { BusinessPurchaseResolver } from "./businessPurchase.resolver";

@Module({
  imports: [BusinessPurchaseModuleBase],
  controllers: [BusinessPurchaseController],
  providers: [BusinessPurchaseService, BusinessPurchaseResolver],
  exports: [BusinessPurchaseService],
})
export class BusinessPurchaseModule {}
