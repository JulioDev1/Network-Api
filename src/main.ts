import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters';
async function bootstrap() {
  const {SERVER_PORT} = process.env
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,  new FastifyAdapter());
  await app.listen(SERVER_PORT, '0.0.0.0');
}
bootstrap();
