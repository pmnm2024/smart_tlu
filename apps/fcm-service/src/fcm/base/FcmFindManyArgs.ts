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
import { FcmWhereInput } from "./FcmWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FcmOrderByInput } from "./FcmOrderByInput";

@ArgsType()
class FcmFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FcmWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FcmWhereInput, { nullable: true })
  @Type(() => FcmWhereInput)
  where?: FcmWhereInput;

  @ApiProperty({
    required: false,
    type: [FcmOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FcmOrderByInput], { nullable: true })
  @Type(() => FcmOrderByInput)
  orderBy?: Array<FcmOrderByInput>;

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

export { FcmFindManyArgs as FcmFindManyArgs };
