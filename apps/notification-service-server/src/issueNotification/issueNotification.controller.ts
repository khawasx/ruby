import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IssueNotificationService } from "./issueNotification.service";
import { IssueNotificationControllerBase } from "./base/issueNotification.controller.base";

@swagger.ApiTags("issueNotifications")
@common.Controller("issueNotifications")
export class IssueNotificationController extends IssueNotificationControllerBase {
  constructor(protected readonly service: IssueNotificationService) {
    super(service);
  }
}
