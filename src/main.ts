import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,  new FastifyAdapter());
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
