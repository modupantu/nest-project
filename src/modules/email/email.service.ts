import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer'
@Injectable()
export class EmailService {
  constructor(private readonly mailerService:MailerService){}
  sendEmail() {
    this.mailerService.sendMail({
      to:'modupantu@126.com',
      from:"caoruichun@yeah.net",
      subject:'测试',
      // html:"<div>测试</div>"
      template:"welcome"
    })
  }
}
