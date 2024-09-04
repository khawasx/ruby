import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductReviewService } from "./productReview.service";
import { ProductReviewControllerBase } from "./base/productReview.controller.base";

@swagger.ApiTags("productReviews")
@common.Controller("productReviews")
export class ProductReviewController extends ProductReviewControllerBase {
  constructor(protected readonly service: ProductReviewService) {
    super(service);
  }
}
