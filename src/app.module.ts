import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule, Neo4jConfig } from '@nhogs/nestjs-neo4j';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [Neo4jModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService): Neo4jConfig => ({
      scheme: configService.get('neo4j'),
      host: configService.get('NEO4J_HOST'),
      port: configService.get('NEO4J_PORT'),
      username: configService.get('NEO4J_USERNAME'),
      password: configService.get('NEO4J_PASSWORD'),
      database: configService.get('NEO4J_DATABASE'),
    }),
    global: true,
  }),
  ConfigModule.forRoot({
    envFilePath: '../.env',
  }),
  UserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
