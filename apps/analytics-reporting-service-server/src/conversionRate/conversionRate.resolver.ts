import * as graphql from "@nestjs/graphql";
import { ConversionRateResolverBase } from "./base/conversionRate.resolver.base";
import { ConversionRate } from "./base/ConversionRate";
import { ConversionRateService } from "./conversionRate.service";

@graphql.Resolver(() => ConversionRate)
export class ConversionRateResolver extends ConversionRateResolverBase {
  constructor(protected readonly service: ConversionRateService) {
    super(service);
  }
}
