import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductTrendService } from "./productTrend.service";
import { ProductTrendControllerBase } from "./base/productTrend.controller.base";

@swagger.ApiTags("productTrends")
@common.Controller("productTrends")
export class ProductTrendController extends ProductTrendControllerBase {
  constructor(protected readonly service: ProductTrendService) {
    super(service);
  }
}
