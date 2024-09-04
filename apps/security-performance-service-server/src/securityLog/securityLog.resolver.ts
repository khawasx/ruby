import * as graphql from "@nestjs/graphql";
import { SecurityLogResolverBase } from "./base/securityLog.resolver.base";
import { SecurityLog } from "./base/SecurityLog";
import { SecurityLogService } from "./securityLog.service";

@graphql.Resolver(() => SecurityLog)
export class SecurityLogResolver extends SecurityLogResolverBase {
  constructor(protected readonly service: SecurityLogService) {
    super(service);
  }
}
