import { Controller, Post, Options, Req, Res, Query } from '@nestjs/common';
import { AliyunService } from '../../service/voice/aliyun.service';
import { BaiduyunService } from '../../service/voice/baiduyun.service';
import { TencentyunService } from '../../service/voice/tencentyun.service';

const platfoms = ['aliyun', 'baiduyun', 'tencentyun'];
 
@Controller('voice')
export class VoiceController {
  constructor(private readonly aliyunService: AliyunService,
    private readonly baiduyunService: BaiduyunService,
    private readonly tencentyunService: TencentyunService) {}

  @Post()
  voice(@Req() req, @Res() res, @Query() query) {
    if (!platfoms.includes(query.platform)) {
      return res.send({
        result: '参数有误，无该平台！！',
      });
    }
    let msg = [];

    req.on('data', chunk => {
      if(chunk){
        msg.push(chunk);
      }
    });

    req.on('end', async () => {
      let buffer = Buffer.concat(msg);
      let trans = '';

      if (query.platform === 'baiduyun') {
        trans = await this.baiduyunService.translate(buffer);
      } else if (query.platform === 'aliyun') {
        trans = await this.aliyunService.translate(buffer);
      } else if (query.platform === 'tencentyun') {
        trans = await this.tencentyunService.translate(buffer);
      }

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
