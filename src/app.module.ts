import * as path from "path";
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { EmailModule } from './modules/email/email.module';
import {RoleGuardModule} from './modules/role-guard/role-guard.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MailerModule } from '@nestjs-modules/mailer'
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter'

@Module({

  imports: [CatsModule,RoleGuardModule,EmailModule,
    MailerModule.forRootAsync({
      useFactory:()=>({
        transport:{
          host: "smtp.yeah.net",
          port: "465",
          auth: {
            user: "caoruichun@yeah.net",
            pass: "DHDNJARCROMLJAQN"
          }
        },
        defaults:{
          from:"'nest-modules'<caoruichun@yeah.net>",
        },
        template:{
          dir: path.join(__dirname,'./template/email'),
          adapter:new PugAdapter(),
          options:{
            strict:true
          }
        }
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({path:'hello',method:RequestMethod.GET})//  exclud作用 hello中的GET 方法，不走中间件
      .forRoutes('hello')// 监听Hello
  }
}
