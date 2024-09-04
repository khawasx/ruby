import * as graphql from "@nestjs/graphql";
import { ProductTrendResolverBase } from "./base/productTrend.resolver.base";
import { ProductTrend } from "./base/ProductTrend";
import { ProductTrendService } from "./productTrend.service";

@graphql.Resolver(() => ProductTrend)
export class ProductTrendResolver extends ProductTrendResolverBase {
  constructor(protected readonly service: ProductTrendService) {
    super(service);
  }
}
