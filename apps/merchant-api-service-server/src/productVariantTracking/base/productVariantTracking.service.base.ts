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
  ProductVariantTracking as PrismaProductVariantTracking,
  Customer as PrismaCustomer,
  Merchant as PrismaMerchant,
} from "@prisma/client";

export class ProductVariantTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductVariantTrackingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productVariantTracking.count(args);
  }

  async productVariantTrackings(
    args: Prisma.ProductVariantTrackingFindManyArgs
  ): Promise<PrismaProductVariantTracking[]> {
    return this.prisma.productVariantTracking.findMany(args);
  }
  async productVariantTracking(
    args: Prisma.ProductVariantTrackingFindUniqueArgs
  ): Promise<PrismaProductVariantTracking | null> {
    return this.prisma.productVariantTracking.findUnique(args);
  }
  async createProductVariantTracking(
    args: Prisma.ProductVariantTrackingCreateArgs
  ): Promise<PrismaProductVariantTracking> {
    return this.prisma.productVariantTracking.create(args);
  }
  async updateProductVariantTracking(
    args: Prisma.ProductVariantTrackingUpdateArgs
  ): Promise<PrismaProductVariantTracking> {
    return this.prisma.productVariantTracking.update(args);
  }
  async deleteProductVariantTracking(
    args: Prisma.ProductVariantTrackingDeleteArgs
  ): Promise<PrismaProductVariantTracking> {
    return this.prisma.productVariantTracking.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.productVariantTracking
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getMerchant(parentId: string): Promise<PrismaMerchant | null> {
    return this.prisma.productVariantTracking
      .findUnique({
        where: { id: parentId },
      })
      .merchant();
  }
}
