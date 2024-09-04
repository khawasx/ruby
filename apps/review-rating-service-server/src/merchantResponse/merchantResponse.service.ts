import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MerchantResponseServiceBase } from "./base/merchantResponse.service.base";

@Injectable()
export class MerchantResponseService extends MerchantResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
