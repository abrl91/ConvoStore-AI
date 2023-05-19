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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { NoteListRelationFilter } from "../../note/base/NoteListRelationFilter";
import { EnumCategoryOptions } from "./EnumCategoryOptions";

@InputType()
class CategoryWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => NoteListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NoteListRelationFilter)
  @IsOptional()
  @Field(() => NoteListRelationFilter, {
    nullable: true,
  })
  notes?: NoteListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumCategoryOptions,
  })
  @IsEnum(EnumCategoryOptions)
  @IsOptional()
  @Field(() => EnumCategoryOptions, {
    nullable: true,
  })
  options?: "Photography" | "Music" | "Piano" | "Code" | "Sports";
}

export { CategoryWhereInput as CategoryWhereInput };
