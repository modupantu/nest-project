import { NestFactory } from '@nestjs/core';
import  {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
