import * as graphql from "@nestjs/graphql";
import { IssueNotificationResolverBase } from "./base/issueNotification.resolver.base";
import { IssueNotification } from "./base/IssueNotification";
import { IssueNotificationService } from "./issueNotification.service";

@graphql.Resolver(() => IssueNotification)
export class IssueNotificationResolver extends IssueNotificationResolverBase {
  constructor(protected readonly service: IssueNotificationService) {
    super(service);
  }
}
