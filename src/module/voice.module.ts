import { Module } from '@nestjs/common';
import { VoiceController } from '../controller/voice/voice.controller';
import { VoiceService } from '../service/voice/voice.service';

@Module({
  imports: [],
  controllers: [VoiceController],
  providers: [VoiceService],
})
export class VoiceModule {}
