import { Module } from '@nestjs/common';
import {RoleGuardComtroller } from "./role-guard.comtroller"
@Module({
  controllers: [RoleGuardComtroller],
  providers: [],
  exports: [] //共享模块
})
export class RoleGuardModule {}
