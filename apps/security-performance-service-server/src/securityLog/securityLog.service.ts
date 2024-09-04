import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecurityLogServiceBase } from "./base/securityLog.service.base";

@Injectable()
export class SecurityLogService extends SecurityLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
