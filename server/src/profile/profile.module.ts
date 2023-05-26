import { Module } from "@nestjs/common";
import { ProfileModuleBase } from "./base/profile.module.base";
import { ProfileService } from "./profile.service";
import { ProfileResolver } from "./profile.resolver";

@Module({
  imports: [ProfileModuleBase],
  providers: [ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule {}
