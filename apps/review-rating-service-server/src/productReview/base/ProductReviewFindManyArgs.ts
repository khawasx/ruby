/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductReviewWhereInput } from "./ProductReviewWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductReviewOrderByInput } from "./ProductReviewOrderByInput";

@ArgsType()
class ProductReviewFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductReviewWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductReviewWhereInput, { nullable: true })
  @Type(() => ProductReviewWhereInput)
  where?: ProductReviewWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductReviewOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductReviewOrderByInput], { nullable: true })
  @Type(() => ProductReviewOrderByInput)
  orderBy?: Array<ProductReviewOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductReviewFindManyArgs as ProductReviewFindManyArgs };
