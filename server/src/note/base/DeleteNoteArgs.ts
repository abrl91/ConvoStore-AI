/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { NoteWhereUniqueInput } from "./NoteWhereUniqueInput";

@ArgsType()
class DeleteNoteArgs {
  @Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;
}

export { DeleteNoteArgs as DeleteNoteArgs };
