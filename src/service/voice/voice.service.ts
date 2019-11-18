import { Injectable } from '@nestjs/common';
const config = require('../../../config/config.js')
let ROAClient = require('@alicloud/pop-core').ROAClient,
  request = require('request');

var client = new ROAClient({
  accessKeyId: config.accessKeyId,            // 添加
  accessKeySecret: config.accessKeySecret,        // 添加
  endpoint: 'http://nls-meta.cn-shanghai.aliyuncs.com',
  apiVersion: '2018-05-18'
});
const cache = {
  Id: '',
  ExpireTime: 0,
}

@Injectable()
export class VoiceService {

  async getToken() {
    return new Promise((resolve, reject) => {
      if (+new Date() < cache.ExpireTime) {
        resolve(cache.Id);
      }
      client.request('POST', '/pop/2018-05-18/tokens').then((result) => {
        cache.Id = result.Token.Id;
        cache.ExpireTime = result.Token.ExpireTime;
  
        resolve(result.Token.Id);
      });
    });
  }

  async translate(buffer) {
    const options = {
      url: 'http://nls-gateway.cn-shanghai.aliyuncs.com/stream/v1/asr?appkey=UL9Xm7wmBiTa2YmW',
      method: 'POST',
      headers: {
        'X-NLS-Token': '',
        'Content-Type': 'application/octet-stream',
        'Content-Length': buffer.length,
        'Host': 'nls-gateway.cn-shanghai.aliyuncs.com'
      },
      body: buffer
    };

    const tokenId = await getToken();
    options.headers['X-NLS-Token'] = tokenId;

    return new Promise((resolve, reject) => {
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

async function getToken(): Promise<string>  {
  return client.request('POST', '/pop/2018-05-18/tokens').then((result) => {
    return result.Token.Id
  });
}
