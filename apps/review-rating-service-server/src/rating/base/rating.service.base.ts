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
  Rating as PrismaRating,
  ProductReview as PrismaProductReview,
} from "@prisma/client";

export class RatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RatingCountArgs, "select">): Promise<number> {
    return this.prisma.rating.count(args);
  }

  async ratings(args: Prisma.RatingFindManyArgs): Promise<PrismaRating[]> {
    return this.prisma.rating.findMany(args);
  }
  async rating(
    args: Prisma.RatingFindUniqueArgs
  ): Promise<PrismaRating | null> {
    return this.prisma.rating.findUnique(args);
  }
  async createRating(args: Prisma.RatingCreateArgs): Promise<PrismaRating> {
    return this.prisma.rating.create(args);
  }
  async updateRating(args: Prisma.RatingUpdateArgs): Promise<PrismaRating> {
    return this.prisma.rating.update(args);
  }
  async deleteRating(args: Prisma.RatingDeleteArgs): Promise<PrismaRating> {
    return this.prisma.rating.delete(args);
  }

  async findProductReviews(
    parentId: string,
    args: Prisma.ProductReviewFindManyArgs
  ): Promise<PrismaProductReview[]> {
    return this.prisma.rating
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productReviews(args);
  }
}
