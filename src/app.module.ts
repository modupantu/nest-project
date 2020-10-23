import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsModule} from "./cats/cats.module"
import { LoggerMiddleware } from './common/middleware/logger.middleware';
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(LoggerMiddleware)
        .exclude({path:"cats",method:RequestMethod.ALL}) //exclude 剔除指定路径cats
        .forRoutes('cats')
  }
}
