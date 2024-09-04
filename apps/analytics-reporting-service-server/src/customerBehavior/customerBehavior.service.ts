import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerBehaviorServiceBase } from "./base/customerBehavior.service.base";

@Injectable()
export class CustomerBehaviorService extends CustomerBehaviorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
