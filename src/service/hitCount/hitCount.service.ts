import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class HitCountService {
  // constructor(@InjectModel('Hit') private readonly hitModel: Model) {}

  async hit(path: string): Promise<{}> {
    // return this.hitModel.hitIt(path);
    return 1;
  }
}
