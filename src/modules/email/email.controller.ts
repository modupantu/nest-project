import {Controller,Get,Post,Query,UseGuards} from "@nestjs/common";
import {ApiTags,ApiBearerAuth} from '@nestjs/swagger'
import {EmailService} from './email.service'
/*
* 发送邮件
* */
@ApiTags('email')
@Controller('/email')
export class  EmailController {
  constructor(private  readonly emailService:EmailService){}
  @Get()
  fetch(@Query(){id}):string{
    this.emailService.sendEmail()
    return 'ok'
  }
}
