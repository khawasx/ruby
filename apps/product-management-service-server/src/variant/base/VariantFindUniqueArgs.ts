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
import { VariantWhereUniqueInput } from "./VariantWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class VariantFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => VariantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VariantWhereUniqueInput)
  @Field(() => VariantWhereUniqueInput, { nullable: false })
  where!: VariantWhereUniqueInput;
}

export { VariantFindUniqueArgs as VariantFindUniqueArgs };
