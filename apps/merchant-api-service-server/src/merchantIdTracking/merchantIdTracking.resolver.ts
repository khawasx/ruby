import * as graphql from "@nestjs/graphql";
import { MerchantIdTrackingResolverBase } from "./base/merchantIdTracking.resolver.base";
import { MerchantIdTracking } from "./base/MerchantIdTracking";
import { MerchantIdTrackingService } from "./merchantIdTracking.service";

@graphql.Resolver(() => MerchantIdTracking)
export class MerchantIdTrackingResolver extends MerchantIdTrackingResolverBase {
  constructor(protected readonly service: MerchantIdTrackingService) {
    super(service);
  }
}
