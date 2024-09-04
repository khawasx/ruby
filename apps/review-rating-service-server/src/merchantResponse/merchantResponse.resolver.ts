import * as graphql from "@nestjs/graphql";
import { MerchantResponseResolverBase } from "./base/merchantResponse.resolver.base";
import { MerchantResponse } from "./base/MerchantResponse";
import { MerchantResponseService } from "./merchantResponse.service";

@graphql.Resolver(() => MerchantResponse)
export class MerchantResponseResolver extends MerchantResponseResolverBase {
  constructor(protected readonly service: MerchantResponseService) {
    super(service);
  }
}
