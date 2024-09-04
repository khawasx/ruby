import * as graphql from "@nestjs/graphql";
import { ProductReviewResolverBase } from "./base/productReview.resolver.base";
import { ProductReview } from "./base/ProductReview";
import { ProductReviewService } from "./productReview.service";

@graphql.Resolver(() => ProductReview)
export class ProductReviewResolver extends ProductReviewResolverBase {
  constructor(protected readonly service: ProductReviewService) {
    super(service);
  }
}
