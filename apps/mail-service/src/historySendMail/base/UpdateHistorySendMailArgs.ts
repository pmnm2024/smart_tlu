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
import { HistorySendMailWhereUniqueInput } from "./HistorySendMailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HistorySendMailUpdateInput } from "./HistorySendMailUpdateInput";

@ArgsType()
class UpdateHistorySendMailArgs {
  @ApiProperty({
    required: true,
    type: () => HistorySendMailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HistorySendMailWhereUniqueInput)
  @Field(() => HistorySendMailWhereUniqueInput, { nullable: false })
  where!: HistorySendMailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HistorySendMailUpdateInput,
  })
  @ValidateNested()
  @Type(() => HistorySendMailUpdateInput)
  @Field(() => HistorySendMailUpdateInput, { nullable: false })
  data!: HistorySendMailUpdateInput;
}

export { UpdateHistorySendMailArgs as UpdateHistorySendMailArgs };
