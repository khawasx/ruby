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
import { MerchantIdTrackingWhereInput } from "./MerchantIdTrackingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MerchantIdTrackingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MerchantIdTrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantIdTrackingWhereInput)
  @IsOptional()
  @Field(() => MerchantIdTrackingWhereInput, {
    nullable: true,
  })
  every?: MerchantIdTrackingWhereInput;

  @ApiProperty({
    required: false,
    type: () => MerchantIdTrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantIdTrackingWhereInput)
  @IsOptional()
  @Field(() => MerchantIdTrackingWhereInput, {
    nullable: true,
  })
  some?: MerchantIdTrackingWhereInput;

  @ApiProperty({
    required: false,
    type: () => MerchantIdTrackingWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantIdTrackingWhereInput)
  @IsOptional()
  @Field(() => MerchantIdTrackingWhereInput, {
    nullable: true,
  })
  none?: MerchantIdTrackingWhereInput;
}
export { MerchantIdTrackingListRelationFilter as MerchantIdTrackingListRelationFilter };
