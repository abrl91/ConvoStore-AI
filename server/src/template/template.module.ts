import { Module } from "@nestjs/common";
import { TemplateModuleBase } from "./base/template.module.base";
import { TemplateService } from "./template.service";
import { TemplateResolver } from "./template.resolver";

@Module({
  imports: [TemplateModuleBase],
  providers: [TemplateService, TemplateResolver],
  exports: [TemplateService],
})
export class TemplateModule {}
