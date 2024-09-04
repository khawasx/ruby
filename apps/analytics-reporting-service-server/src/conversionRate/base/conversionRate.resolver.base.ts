/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ConversionRate } from "./ConversionRate";
import { ConversionRateCountArgs } from "./ConversionRateCountArgs";
import { ConversionRateFindManyArgs } from "./ConversionRateFindManyArgs";
import { ConversionRateFindUniqueArgs } from "./ConversionRateFindUniqueArgs";
import { DeleteConversionRateArgs } from "./DeleteConversionRateArgs";
import { ConversionRateService } from "../conversionRate.service";
@graphql.Resolver(() => ConversionRate)
export class ConversionRateResolverBase {
  constructor(protected readonly service: ConversionRateService) {}

  async _conversionRatesMeta(
    @graphql.Args() args: ConversionRateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ConversionRate])
  async conversionRates(
    @graphql.Args() args: ConversionRateFindManyArgs
  ): Promise<ConversionRate[]> {
    return this.service.conversionRates(args);
  }

  @graphql.Query(() => ConversionRate, { nullable: true })
  async conversionRate(
    @graphql.Args() args: ConversionRateFindUniqueArgs
  ): Promise<ConversionRate | null> {
    const result = await this.service.conversionRate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ConversionRate)
  async deleteConversionRate(
    @graphql.Args() args: DeleteConversionRateArgs
  ): Promise<ConversionRate | null> {
    try {
      return await this.service.deleteConversionRate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
