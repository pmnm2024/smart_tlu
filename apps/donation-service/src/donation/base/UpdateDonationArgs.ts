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
import { DonationWhereUniqueInput } from "./DonationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DonationUpdateInput } from "./DonationUpdateInput";

@ArgsType()
class UpdateDonationArgs {
  @ApiProperty({
    required: true,
    type: () => DonationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DonationWhereUniqueInput)
  @Field(() => DonationWhereUniqueInput, { nullable: false })
  where!: DonationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DonationUpdateInput,
  })
  @ValidateNested()
  @Type(() => DonationUpdateInput)
  @Field(() => DonationUpdateInput, { nullable: false })
  data!: DonationUpdateInput;
}

export { UpdateDonationArgs as UpdateDonationArgs };