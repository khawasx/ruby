import { Module } from "@nestjs/common";
import { IssueNotificationModuleBase } from "./base/issueNotification.module.base";
import { IssueNotificationService } from "./issueNotification.service";
import { IssueNotificationController } from "./issueNotification.controller";
import { IssueNotificationResolver } from "./issueNotification.resolver";

@Module({
  imports: [IssueNotificationModuleBase],
  controllers: [IssueNotificationController],
  providers: [IssueNotificationService, IssueNotificationResolver],
  exports: [IssueNotificationService],
})
export class IssueNotificationModule {}
