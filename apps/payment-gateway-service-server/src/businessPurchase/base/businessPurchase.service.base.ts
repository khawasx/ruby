/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  BusinessPurchase as PrismaBusinessPurchase,
} from "@prisma/client";

export class BusinessPurchaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BusinessPurchaseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.businessPurchase.count(args);
  }

  async businessPurchases(
    args: Prisma.BusinessPurchaseFindManyArgs
  ): Promise<PrismaBusinessPurchase[]> {
    return this.prisma.businessPurchase.findMany(args);
  }
  async businessPurchase(
    args: Prisma.BusinessPurchaseFindUniqueArgs
  ): Promise<PrismaBusinessPurchase | null> {
    return this.prisma.businessPurchase.findUnique(args);
  }
  async createBusinessPurchase(
    args: Prisma.BusinessPurchaseCreateArgs
  ): Promise<PrismaBusinessPurchase> {
    return this.prisma.businessPurchase.create(args);
  }
  async updateBusinessPurchase(
    args: Prisma.BusinessPurchaseUpdateArgs
  ): Promise<PrismaBusinessPurchase> {
    return this.prisma.businessPurchase.update(args);
  }
  async deleteBusinessPurchase(
    args: Prisma.BusinessPurchaseDeleteArgs
  ): Promise<PrismaBusinessPurchase> {
    return this.prisma.businessPurchase.delete(args);
  }
}
