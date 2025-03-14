import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./module/user.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'root',
          password: 'mysql123',
          database: 'water-drop',
          logging: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
      }),
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
