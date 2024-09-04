import * as graphql from "@nestjs/graphql";
import { ProductVariantTrackingResolverBase } from "./base/productVariantTracking.resolver.base";
import { ProductVariantTracking } from "./base/ProductVariantTracking";
import { ProductVariantTrackingService } from "./productVariantTracking.service";

@graphql.Resolver(() => ProductVariantTracking)
export class ProductVariantTrackingResolver extends ProductVariantTrackingResolverBase {
  constructor(protected readonly service: ProductVariantTrackingService) {
    super(service);
  }
}
