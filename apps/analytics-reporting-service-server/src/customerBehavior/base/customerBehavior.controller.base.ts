/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CustomerBehaviorService } from "../customerBehavior.service";
import { CustomerBehaviorCreateInput } from "./CustomerBehaviorCreateInput";
import { CustomerBehavior } from "./CustomerBehavior";
import { CustomerBehaviorFindManyArgs } from "./CustomerBehaviorFindManyArgs";
import { CustomerBehaviorWhereUniqueInput } from "./CustomerBehaviorWhereUniqueInput";
import { CustomerBehaviorUpdateInput } from "./CustomerBehaviorUpdateInput";

export class CustomerBehaviorControllerBase {
  constructor(protected readonly service: CustomerBehaviorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CustomerBehavior })
  async createCustomerBehavior(
    @common.Body() data: CustomerBehaviorCreateInput
  ): Promise<CustomerBehavior> {
    return await this.service.createCustomerBehavior({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CustomerBehavior] })
  @ApiNestedQuery(CustomerBehaviorFindManyArgs)
  async customerBehaviors(
    @common.Req() request: Request
  ): Promise<CustomerBehavior[]> {
    const args = plainToClass(CustomerBehaviorFindManyArgs, request.query);
    return this.service.customerBehaviors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CustomerBehavior })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async customerBehavior(
    @common.Param() params: CustomerBehaviorWhereUniqueInput
  ): Promise<CustomerBehavior | null> {
    const result = await this.service.customerBehavior({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CustomerBehavior })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCustomerBehavior(
    @common.Param() params: CustomerBehaviorWhereUniqueInput,
    @common.Body() data: CustomerBehaviorUpdateInput
  ): Promise<CustomerBehavior | null> {
    try {
      return await this.service.updateCustomerBehavior({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CustomerBehavior })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCustomerBehavior(
    @common.Param() params: CustomerBehaviorWhereUniqueInput
  ): Promise<CustomerBehavior | null> {
    try {
      return await this.service.deleteCustomerBehavior({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
