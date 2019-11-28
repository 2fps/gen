import { Injectable } from '@nestjs/common';
const config = require('../../../config/config.js')
let AipSpeechClient = require("baidu-aip-sdk").speech;

@Injectable()
export class BaiduyunService {
  async translate(buffer): Promise<string> {
    // 文档地址  https://ai.baidu.com/docs#/ASR-Online-Node-SDK/top
    const APP_ID = config.APP_ID;
    const API_KEY = config.API_KEY;
    const SECRET_KEY = config.SECRET_KEY;

    let client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

    return new Promise((resolve, reject) => {
      client.recognize(buffer, 'pcm', 16000).then(function (result) {
        // if (result.err_no) {
        //   // 其他异常
        //   return;
        // }
        // console.log(result);
        resolve(result.result[0]);
      }).catch(function() {

      });
    });
  }
}
