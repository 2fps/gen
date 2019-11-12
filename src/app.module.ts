import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HitCountModule } from './module/hitCount.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/blog'), HitCountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
