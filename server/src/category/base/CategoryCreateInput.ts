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
import { NoteCreateNestedManyWithoutCategoriesInput } from "./NoteCreateNestedManyWithoutCategoriesInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumCategoryOptions } from "./EnumCategoryOptions";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => NoteCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => NoteCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => NoteCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  notes?: NoteCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    enum: EnumCategoryOptions,
  })
  @IsEnum(EnumCategoryOptions)
  @IsOptional()
  @Field(() => EnumCategoryOptions, {
    nullable: true,
  })
  options?: "Photography" | "Music" | "Piano" | "Code" | "Sports" | null;
}

export { CategoryCreateInput as CategoryCreateInput };
