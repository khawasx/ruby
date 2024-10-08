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
import { BusinessPurchaseService } from "../businessPurchase.service";
import { BusinessPurchaseCreateInput } from "./BusinessPurchaseCreateInput";
import { BusinessPurchase } from "./BusinessPurchase";
import { BusinessPurchaseFindManyArgs } from "./BusinessPurchaseFindManyArgs";
import { BusinessPurchaseWhereUniqueInput } from "./BusinessPurchaseWhereUniqueInput";
import { BusinessPurchaseUpdateInput } from "./BusinessPurchaseUpdateInput";

export class BusinessPurchaseControllerBase {
  constructor(protected readonly service: BusinessPurchaseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BusinessPurchase })
  async createBusinessPurchase(
    @common.Body() data: BusinessPurchaseCreateInput
  ): Promise<BusinessPurchase> {
    return await this.service.createBusinessPurchase({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BusinessPurchase] })
  @ApiNestedQuery(BusinessPurchaseFindManyArgs)
  async businessPurchases(
    @common.Req() request: Request
  ): Promise<BusinessPurchase[]> {
    const args = plainToClass(BusinessPurchaseFindManyArgs, request.query);
    return this.service.businessPurchases({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BusinessPurchase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async businessPurchase(
    @common.Param() params: BusinessPurchaseWhereUniqueInput
  ): Promise<BusinessPurchase | null> {
    const result = await this.service.businessPurchase({
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
  @swagger.ApiOkResponse({ type: BusinessPurchase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBusinessPurchase(
    @common.Param() params: BusinessPurchaseWhereUniqueInput,
    @common.Body() data: BusinessPurchaseUpdateInput
  ): Promise<BusinessPurchase | null> {
    try {
      return await this.service.updateBusinessPurchase({
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
  @swagger.ApiOkResponse({ type: BusinessPurchase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBusinessPurchase(
    @common.Param() params: BusinessPurchaseWhereUniqueInput
  ): Promise<BusinessPurchase | null> {
    try {
      return await this.service.deleteBusinessPurchase({
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
