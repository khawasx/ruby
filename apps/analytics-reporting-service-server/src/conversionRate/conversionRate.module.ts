import { Module } from "@nestjs/common";
import { ConversionRateModuleBase } from "./base/conversionRate.module.base";
import { ConversionRateService } from "./conversionRate.service";
import { ConversionRateController } from "./conversionRate.controller";
import { ConversionRateResolver } from "./conversionRate.resolver";

@Module({
  imports: [ConversionRateModuleBase],
  controllers: [ConversionRateController],
  providers: [ConversionRateService, ConversionRateResolver],
  exports: [ConversionRateService],
})
export class ConversionRateModule {}
