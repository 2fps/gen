import { Controller, Get, Query, Header } from '@nestjs/common';
import { HitCountService } from '../../service/hitCount/hitCount.service';
 
@Controller('hitCount')
export class HitCountController {
  constructor(private readonly hitCountService: HitCountService) {}

  @Get()
  @Header('Cache-Control', 'no-cache')
  hitCount(@Query() query) {
    let path = query.path;

    return this.hitCountService.hit(path);
  }
}
