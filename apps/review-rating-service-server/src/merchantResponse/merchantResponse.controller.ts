import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MerchantResponseService } from "./merchantResponse.service";
import { MerchantResponseControllerBase } from "./base/merchantResponse.controller.base";

@swagger.ApiTags("merchantResponses")
@common.Controller("merchantResponses")
export class MerchantResponseController extends MerchantResponseControllerBase {
  constructor(protected readonly service: MerchantResponseService) {
    super(service);
  }
}
