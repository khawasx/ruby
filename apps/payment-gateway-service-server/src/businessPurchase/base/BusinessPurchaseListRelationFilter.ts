/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BusinessPurchaseWhereInput } from "./BusinessPurchaseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BusinessPurchaseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BusinessPurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => BusinessPurchaseWhereInput)
  @IsOptional()
  @Field(() => BusinessPurchaseWhereInput, {
    nullable: true,
  })
  every?: BusinessPurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => BusinessPurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => BusinessPurchaseWhereInput)
  @IsOptional()
  @Field(() => BusinessPurchaseWhereInput, {
    nullable: true,
  })
  some?: BusinessPurchaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => BusinessPurchaseWhereInput,
  })
  @ValidateNested()
  @Type(() => BusinessPurchaseWhereInput)
  @IsOptional()
  @Field(() => BusinessPurchaseWhereInput, {
    nullable: true,
  })
  none?: BusinessPurchaseWhereInput;
}
export { BusinessPurchaseListRelationFilter as BusinessPurchaseListRelationFilter };
