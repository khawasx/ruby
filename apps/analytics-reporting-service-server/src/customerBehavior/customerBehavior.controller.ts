import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerBehaviorService } from "./customerBehavior.service";
import { CustomerBehaviorControllerBase } from "./base/customerBehavior.controller.base";

@swagger.ApiTags("customerBehaviors")
@common.Controller("customerBehaviors")
export class CustomerBehaviorController extends CustomerBehaviorControllerBase {
  constructor(protected readonly service: CustomerBehaviorService) {
    super(service);
  }
}
