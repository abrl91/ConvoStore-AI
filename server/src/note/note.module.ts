import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NoteModuleBase } from "./base/note.module.base";
import { NoteService } from "./note.service";
import { NoteResolver } from "./note.resolver";

@Module({
  imports: [NoteModuleBase, forwardRef(() => AuthModule)],
  providers: [NoteService, NoteResolver],
  exports: [NoteService],
})
export class NoteModule {}
