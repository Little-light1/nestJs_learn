/*
 * @Author: shimmer
 * @Date: 2023-06-25 11:19:42
 * @LastEditors: shimmer
 * @LastEditTime: 2023-06-28 09:20:45
 *
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' });
  await app.listen(3030);
}
bootstrap();
