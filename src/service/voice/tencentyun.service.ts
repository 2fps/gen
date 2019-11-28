import { Injectable } from '@nestjs/common';
const request = require('request');
const config = require('../../../config/config.js')

@Injectable()
export class TencentyunService {
  async translate(buffer): Promise<string> {
    // 文档地址  https://ai.baidu.com/docs#/ASR-Online-Node-SDK/top
    const APP_ID = config.APP_ID;
    const API_KEY = config.API_KEY;
    const SECRET_KEY = config.SECRET_KEY;


    return new Promise((resolve, reject) => {
      let options = {
        Action: 'SentenceRecognition',
        Version: '2019-06-14',
        ProjectId: '',
        SubServiceType: 2,
        EngSerViceType: '16k',
        SourceType: 1,
        VoiceFormat: 'wav',
        UsrAudioKey: 0,
        
      };

      request(options, function(error, response, body) {
        if (error) {
          console.error('upload failed:', error);
          reject(error);

          return;
        }

        resolve(JSON.parse(body).result);
      });
    });
  }
}
