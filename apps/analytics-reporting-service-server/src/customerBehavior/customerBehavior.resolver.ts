import * as graphql from "@nestjs/graphql";
import { CustomerBehaviorResolverBase } from "./base/customerBehavior.resolver.base";
import { CustomerBehavior } from "./base/CustomerBehavior";
import { CustomerBehaviorService } from "./customerBehavior.service";

@graphql.Resolver(() => CustomerBehavior)
export class CustomerBehaviorResolver extends CustomerBehaviorResolverBase {
  constructor(protected readonly service: CustomerBehaviorService) {
    super(service);
  }
}
