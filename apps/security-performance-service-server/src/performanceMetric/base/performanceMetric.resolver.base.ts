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
import { PerformanceMetric } from "./PerformanceMetric";
import { PerformanceMetricCountArgs } from "./PerformanceMetricCountArgs";
import { PerformanceMetricFindManyArgs } from "./PerformanceMetricFindManyArgs";
import { PerformanceMetricFindUniqueArgs } from "./PerformanceMetricFindUniqueArgs";
import { DeletePerformanceMetricArgs } from "./DeletePerformanceMetricArgs";
import { PerformanceMetricService } from "../performanceMetric.service";
@graphql.Resolver(() => PerformanceMetric)
export class PerformanceMetricResolverBase {
  constructor(protected readonly service: PerformanceMetricService) {}

  async _performanceMetricsMeta(
    @graphql.Args() args: PerformanceMetricCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PerformanceMetric])
  async performanceMetrics(
    @graphql.Args() args: PerformanceMetricFindManyArgs
  ): Promise<PerformanceMetric[]> {
    return this.service.performanceMetrics(args);
  }

  @graphql.Query(() => PerformanceMetric, { nullable: true })
  async performanceMetric(
    @graphql.Args() args: PerformanceMetricFindUniqueArgs
  ): Promise<PerformanceMetric | null> {
    const result = await this.service.performanceMetric(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PerformanceMetric)
  async deletePerformanceMetric(
    @graphql.Args() args: DeletePerformanceMetricArgs
  ): Promise<PerformanceMetric | null> {
    try {
      return await this.service.deletePerformanceMetric(args);
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
