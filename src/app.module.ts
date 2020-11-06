import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { EmailModule } from './modules/email/email.module';
import {RoleGuardModule} from './modules/role-guard/role-guard.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MailerModule } from '@nestjs-modules/mailer'
import {ConfigModule,ConfigService} from "nestjs-config" // 项目配置集中管理包插件
import {resolve} from 'path';
import { StatusMonitorModule } from "nest-status-monitor"; //服务状态监控
import { AuthModule } from './modules/auth/auth.module';
import statusMonitorConfig from './config/statusMonitor'; // 服务状态监控配置
@Module({
  imports: [
    CatsModule,
    RoleGuardModule,
    EmailModule,
    AuthModule,
    ConfigModule.load(resolve(__dirname,'config','**/!(*.d).{ts,js}')),
    StatusMonitorModule.setUp(statusMonitorConfig),
    MailerModule.forRootAsync({
      useFactory:(config:ConfigService)=>config.get('email'),
      inject:[ConfigService]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({path:'hello',method:RequestMethod.GET})//  exclud作用 hello中的GET 方法，不走中间件
      .forRoutes('hello')// 监听Hello
  }
}
