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
import { SecurityLog } from "./SecurityLog";
import { SecurityLogCountArgs } from "./SecurityLogCountArgs";
import { SecurityLogFindManyArgs } from "./SecurityLogFindManyArgs";
import { SecurityLogFindUniqueArgs } from "./SecurityLogFindUniqueArgs";
import { DeleteSecurityLogArgs } from "./DeleteSecurityLogArgs";
import { SecurityLogService } from "../securityLog.service";
@graphql.Resolver(() => SecurityLog)
export class SecurityLogResolverBase {
  constructor(protected readonly service: SecurityLogService) {}

  async _securityLogsMeta(
    @graphql.Args() args: SecurityLogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SecurityLog])
  async securityLogs(
    @graphql.Args() args: SecurityLogFindManyArgs
  ): Promise<SecurityLog[]> {
    return this.service.securityLogs(args);
  }

  @graphql.Query(() => SecurityLog, { nullable: true })
  async securityLog(
    @graphql.Args() args: SecurityLogFindUniqueArgs
  ): Promise<SecurityLog | null> {
    const result = await this.service.securityLog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SecurityLog)
  async deleteSecurityLog(
    @graphql.Args() args: DeleteSecurityLogArgs
  ): Promise<SecurityLog | null> {
    try {
      return await this.service.deleteSecurityLog(args);
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
