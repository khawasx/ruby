import * as graphql from "@nestjs/graphql";
import { BusinessPurchaseResolverBase } from "./base/businessPurchase.resolver.base";
import { BusinessPurchase } from "./base/BusinessPurchase";
import { BusinessPurchaseService } from "./businessPurchase.service";

@graphql.Resolver(() => BusinessPurchase)
export class BusinessPurchaseResolver extends BusinessPurchaseResolverBase {
  constructor(protected readonly service: BusinessPurchaseService) {
    super(service);
  }
}
