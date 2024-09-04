/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProductTrend as PrismaProductTrend } from "@prisma/client";

export class ProductTrendServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductTrendCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productTrend.count(args);
  }

  async productTrends(
    args: Prisma.ProductTrendFindManyArgs
  ): Promise<PrismaProductTrend[]> {
    return this.prisma.productTrend.findMany(args);
  }
  async productTrend(
    args: Prisma.ProductTrendFindUniqueArgs
  ): Promise<PrismaProductTrend | null> {
    return this.prisma.productTrend.findUnique(args);
  }
  async createProductTrend(
    args: Prisma.ProductTrendCreateArgs
  ): Promise<PrismaProductTrend> {
    return this.prisma.productTrend.create(args);
  }
  async updateProductTrend(
    args: Prisma.ProductTrendUpdateArgs
  ): Promise<PrismaProductTrend> {
    return this.prisma.productTrend.update(args);
  }
  async deleteProductTrend(
    args: Prisma.ProductTrendDeleteArgs
  ): Promise<PrismaProductTrend> {
    return this.prisma.productTrend.delete(args);
  }
}
