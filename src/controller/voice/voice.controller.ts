import { Controller, Get, Post, Options, Body, Req, Res, HttpCode } from '@nestjs/common';
import { VoiceService } from '../../service/voice/voice.service';


let ROAClient = require('@alicloud/pop-core').ROAClient,
request = require('request');
 
@Controller('voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}

  @Post()
  voice(@Req() req, @Res() res) {
    let msg = [];

    req.on('data', chunk => {
      if(chunk){
        msg.push(chunk);
      }
    });

    req.on('end', async () => {
      let buffer = Buffer.concat(msg);

      const trans = await this.voiceService.translate(buffer);

      res.send(JSON.stringify({
        result: trans,
      }))
    });
  }

  @Options()
  voiceOption() {
    return 111;
  }
}
