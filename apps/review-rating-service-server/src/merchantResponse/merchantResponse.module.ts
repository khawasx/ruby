import { Module } from "@nestjs/common";
import { MerchantResponseModuleBase } from "./base/merchantResponse.module.base";
import { MerchantResponseService } from "./merchantResponse.service";
import { MerchantResponseController } from "./merchantResponse.controller";
import { MerchantResponseResolver } from "./merchantResponse.resolver";

@Module({
  imports: [MerchantResponseModuleBase],
  controllers: [MerchantResponseController],
  providers: [MerchantResponseService, MerchantResponseResolver],
  exports: [MerchantResponseService],
})
export class MerchantResponseModule {}
