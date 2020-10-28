import { Module } from '@nestjs/common';
import {EmailController } from "./email.controller"
import {EmailService} from './email.service'
@Module({
  controllers: [EmailController],
  providers: [EmailService],
  exports: [] //共享模块
})
export class EmailModule {}
