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
  ProductReview as PrismaProductReview,
  Rating as PrismaRating,
} from "@prisma/client";

export class ProductReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductReviewCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productReview.count(args);
  }

  async productReviews(
    args: Prisma.ProductReviewFindManyArgs
  ): Promise<PrismaProductReview[]> {
    return this.prisma.productReview.findMany(args);
  }
  async productReview(
    args: Prisma.ProductReviewFindUniqueArgs
  ): Promise<PrismaProductReview | null> {
    return this.prisma.productReview.findUnique(args);
  }
  async createProductReview(
    args: Prisma.ProductReviewCreateArgs
  ): Promise<PrismaProductReview> {
    return this.prisma.productReview.create(args);
  }
  async updateProductReview(
    args: Prisma.ProductReviewUpdateArgs
  ): Promise<PrismaProductReview> {
    return this.prisma.productReview.update(args);
  }
  async deleteProductReview(
    args: Prisma.ProductReviewDeleteArgs
  ): Promise<PrismaProductReview> {
    return this.prisma.productReview.delete(args);
  }

  async getRating(parentId: string): Promise<PrismaRating | null> {
    return this.prisma.productReview
      .findUnique({
        where: { id: parentId },
      })
      .rating();
  }
}
