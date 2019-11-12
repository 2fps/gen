import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HitCountController } from './controller/hit-count/hit-count.controller';

@Module({
  imports: [],
  controllers: [AppController, HitCountController],
  providers: [AppService],
})
export class AppModule {}
