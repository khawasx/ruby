import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostageServiceBase } from "./base/postage.service.base";

@Injectable()
export class PostageService extends PostageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
