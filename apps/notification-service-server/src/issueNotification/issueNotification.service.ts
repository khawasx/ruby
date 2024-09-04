import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IssueNotificationServiceBase } from "./base/issueNotification.service.base";

@Injectable()
export class IssueNotificationService extends IssueNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
