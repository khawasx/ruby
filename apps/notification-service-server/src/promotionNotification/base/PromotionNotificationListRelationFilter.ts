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
import { PromotionNotificationWhereInput } from "./PromotionNotificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PromotionNotificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PromotionNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionNotificationWhereInput)
  @IsOptional()
  @Field(() => PromotionNotificationWhereInput, {
    nullable: true,
  })
  every?: PromotionNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionNotificationWhereInput)
  @IsOptional()
  @Field(() => PromotionNotificationWhereInput, {
    nullable: true,
  })
  some?: PromotionNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionNotificationWhereInput)
  @IsOptional()
  @Field(() => PromotionNotificationWhereInput, {
    nullable: true,
  })
  none?: PromotionNotificationWhereInput;
}
export { PromotionNotificationListRelationFilter as PromotionNotificationListRelationFilter };
