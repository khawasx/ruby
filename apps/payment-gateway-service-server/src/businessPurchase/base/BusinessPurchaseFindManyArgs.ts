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
import { BusinessPurchaseWhereInput } from "./BusinessPurchaseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BusinessPurchaseOrderByInput } from "./BusinessPurchaseOrderByInput";

@ArgsType()
class BusinessPurchaseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BusinessPurchaseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BusinessPurchaseWhereInput, { nullable: true })
  @Type(() => BusinessPurchaseWhereInput)
  where?: BusinessPurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: [BusinessPurchaseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BusinessPurchaseOrderByInput], { nullable: true })
  @Type(() => BusinessPurchaseOrderByInput)
  orderBy?: Array<BusinessPurchaseOrderByInput>;

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

export { BusinessPurchaseFindManyArgs as BusinessPurchaseFindManyArgs };
