import { NestFactory } from '@nestjs/core';
// @ts-ignore
import  {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { AppModule } from './app.module';
import {HttpExceptionFilter} from './common/filters/http.exception.filter'
import {ValidationPipe} from './common/pipes/validation.pipe'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());
  //全局管道
  app.useGlobalPipes(new ValidationPipe())
  //路由守卫
  // app.useGlobalGuards()
  // 配置swagger 文档配置
  const swaggerOptions = new DocumentBuilder()
      .setTitle('modupantu api document')
      .setDescription('modupantu api description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app,swaggerOptions);
  SwaggerModule.setup('doc',app,document);
  //===配置swagger end===
  await app.listen(3000);
}
bootstrap();
