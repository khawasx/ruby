import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductVariantTrackingService } from "./productVariantTracking.service";
import { ProductVariantTrackingControllerBase } from "./base/productVariantTracking.controller.base";

@swagger.ApiTags("productVariantTrackings")
@common.Controller("productVariantTrackings")
export class ProductVariantTrackingController extends ProductVariantTrackingControllerBase {
  constructor(protected readonly service: ProductVariantTrackingService) {
    super(service);
  }
}
