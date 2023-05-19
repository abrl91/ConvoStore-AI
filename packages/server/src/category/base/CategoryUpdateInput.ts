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
import { NoteUpdateManyWithoutCategoriesInput } from "./NoteUpdateManyWithoutCategoriesInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumCategoryOptions } from "./EnumCategoryOptions";

@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => NoteUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => NoteUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => NoteUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  notes?: NoteUpdateManyWithoutCategoriesInput;

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

export { CategoryUpdateInput as CategoryUpdateInput };