import { Module } from "@nestjs/common";
import { NoteModuleBase } from "./base/note.module.base";
import { NoteService } from "./note.service";
import { NoteResolver } from "./note.resolver";

@Module({
  imports: [NoteModuleBase],
  providers: [NoteService, NoteResolver],
  exports: [NoteService],
})
export class NoteModule {}
