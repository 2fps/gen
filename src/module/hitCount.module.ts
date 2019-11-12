import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HitCountController } from '../controller/hitCount/hitCount.controller';
import { HitCountService } from '../service/hitCount/hitCount.service';
import { HitSchema } from '../schema/hit.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hit', schema: HitSchema }])],
  controllers: [HitCountController],
  providers: [HitCountService],
})
export class HitCountModule {}
