import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecurityLogService } from "./securityLog.service";
import { SecurityLogControllerBase } from "./base/securityLog.controller.base";

@swagger.ApiTags("securityLogs")
@common.Controller("securityLogs")
export class SecurityLogController extends SecurityLogControllerBase {
  constructor(protected readonly service: SecurityLogService) {
    super(service);
  }
}
