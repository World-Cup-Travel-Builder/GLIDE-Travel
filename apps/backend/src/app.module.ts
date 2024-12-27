import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available across all modules
      envFilePath: ['.env'], // Load variables from .env
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
