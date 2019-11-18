import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

import { HitCountModule } from './module/hitCount.module';
import { VoiceModule } from './module/voice.module';

@Module({
  imports: [ HitCountModule, VoiceModule], // MongooseModule.forRoot('mongodb://localhost/blog')
  controllers: [],
  providers: [],
})
export class AppModule {}
