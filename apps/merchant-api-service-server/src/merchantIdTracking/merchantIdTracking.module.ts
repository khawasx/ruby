import { Module } from "@nestjs/common";
import { MerchantIdTrackingModuleBase } from "./base/merchantIdTracking.module.base";
import { MerchantIdTrackingService } from "./merchantIdTracking.service";
import { MerchantIdTrackingController } from "./merchantIdTracking.controller";
import { MerchantIdTrackingResolver } from "./merchantIdTracking.resolver";

@Module({
  imports: [MerchantIdTrackingModuleBase],
  controllers: [MerchantIdTrackingController],
  providers: [MerchantIdTrackingService, MerchantIdTrackingResolver],
  exports: [MerchantIdTrackingService],
})
export class MerchantIdTrackingModule {}
