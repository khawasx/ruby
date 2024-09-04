import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MerchantIdTrackingService } from "./merchantIdTracking.service";
import { MerchantIdTrackingControllerBase } from "./base/merchantIdTracking.controller.base";

@swagger.ApiTags("merchantIdTrackings")
@common.Controller("merchantIdTrackings")
export class MerchantIdTrackingController extends MerchantIdTrackingControllerBase {
  constructor(protected readonly service: MerchantIdTrackingService) {
    super(service);
  }
}
