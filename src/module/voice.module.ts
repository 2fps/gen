import { Module } from '@nestjs/common';
import { VoiceController } from '../controller/voice/voice.controller';
import { AliyunService } from '../service/voice/aliyun.service';
import { BaiduyunService } from '../service/voice/baiduyun.service';
import { TencentyunService } from '../service/voice/tencentyun.service';

@Module({
  imports: [],
  controllers: [VoiceController],
  providers: [AliyunService, BaiduyunService, TencentyunService],
})
export class VoiceModule {}
