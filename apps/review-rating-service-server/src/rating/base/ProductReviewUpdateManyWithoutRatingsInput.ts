/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductReviewWhereUniqueInput } from "../../productReview/base/ProductReviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductReviewUpdateManyWithoutRatingsInput {
  @Field(() => [ProductReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductReviewWhereUniqueInput],
  })
  connect?: Array<ProductReviewWhereUniqueInput>;

  @Field(() => [ProductReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductReviewWhereUniqueInput],
  })
  disconnect?: Array<ProductReviewWhereUniqueInput>;

  @Field(() => [ProductReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductReviewWhereUniqueInput],
  })
  set?: Array<ProductReviewWhereUniqueInput>;
}

export { ProductReviewUpdateManyWithoutRatingsInput as ProductReviewUpdateManyWithoutRatingsInput };
