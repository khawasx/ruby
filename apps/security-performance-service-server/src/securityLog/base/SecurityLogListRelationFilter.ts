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
import { SecurityLogWhereInput } from "./SecurityLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SecurityLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SecurityLogWhereInput,
  })
  @ValidateNested()
  @Type(() => SecurityLogWhereInput)
  @IsOptional()
  @Field(() => SecurityLogWhereInput, {
    nullable: true,
  })
  every?: SecurityLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => SecurityLogWhereInput,
  })
  @ValidateNested()
  @Type(() => SecurityLogWhereInput)
  @IsOptional()
  @Field(() => SecurityLogWhereInput, {
    nullable: true,
  })
  some?: SecurityLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => SecurityLogWhereInput,
  })
  @ValidateNested()
  @Type(() => SecurityLogWhereInput)
  @IsOptional()
  @Field(() => SecurityLogWhereInput, {
    nullable: true,
  })
  none?: SecurityLogWhereInput;
}
export { SecurityLogListRelationFilter as SecurityLogListRelationFilter };
