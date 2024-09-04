import { Module } from "@nestjs/common";
import { SecurityLogModuleBase } from "./base/securityLog.module.base";
import { SecurityLogService } from "./securityLog.service";
import { SecurityLogController } from "./securityLog.controller";
import { SecurityLogResolver } from "./securityLog.resolver";

@Module({
  imports: [SecurityLogModuleBase],
  controllers: [SecurityLogController],
  providers: [SecurityLogService, SecurityLogResolver],
  exports: [SecurityLogService],
})
export class SecurityLogModule {}
