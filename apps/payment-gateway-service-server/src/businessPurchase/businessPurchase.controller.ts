import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessPurchaseService } from "./businessPurchase.service";
import { BusinessPurchaseControllerBase } from "./base/businessPurchase.controller.base";

@swagger.ApiTags("businessPurchases")
@common.Controller("businessPurchases")
export class BusinessPurchaseController extends BusinessPurchaseControllerBase {
  constructor(protected readonly service: BusinessPurchaseService) {
    super(service);
  }
}
