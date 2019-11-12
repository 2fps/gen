import { Test, TestingModule } from '@nestjs/testing';
import { HitCountController } from './hitCount.controller';

describe('HitCount Controller', () => {
  let controller: HitCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HitCountController],
    }).compile();

    controller = module.get<HitCountController>(HitCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
