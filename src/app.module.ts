import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloController } from './modules/hello/hello.controller';
import { HelloService } from './modules/hello/hello.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude({path:'hello',method:RequestMethod.GET})//  exclud作用 hello中的GET 方法，不走中间件
      .forRoutes('hello')// 监听Hello
  }
}
