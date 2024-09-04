import { Module } from "@nestjs/common";
import { PostageModuleBase } from "./base/postage.module.base";
import { PostageService } from "./postage.service";
import { PostageController } from "./postage.controller";
import { PostageResolver } from "./postage.resolver";

@Module({
  imports: [PostageModuleBase],
  controllers: [PostageController],
  providers: [PostageService, PostageResolver],
  exports: [PostageService],
})
export class PostageModule {}
