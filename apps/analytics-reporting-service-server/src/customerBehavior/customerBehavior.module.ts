import { Module } from "@nestjs/common";
import { CustomerBehaviorModuleBase } from "./base/customerBehavior.module.base";
import { CustomerBehaviorService } from "./customerBehavior.service";
import { CustomerBehaviorController } from "./customerBehavior.controller";
import { CustomerBehaviorResolver } from "./customerBehavior.resolver";

@Module({
  imports: [CustomerBehaviorModuleBase],
  controllers: [CustomerBehaviorController],
  providers: [CustomerBehaviorService, CustomerBehaviorResolver],
  exports: [CustomerBehaviorService],
})
export class CustomerBehaviorModule {}
