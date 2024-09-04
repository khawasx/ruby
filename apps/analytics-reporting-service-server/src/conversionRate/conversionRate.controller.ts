import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversionRateService } from "./conversionRate.service";
import { ConversionRateControllerBase } from "./base/conversionRate.controller.base";

@swagger.ApiTags("conversionRates")
@common.Controller("conversionRates")
export class ConversionRateController extends ConversionRateControllerBase {
  constructor(protected readonly service: ConversionRateService) {
    super(service);
  }
}
