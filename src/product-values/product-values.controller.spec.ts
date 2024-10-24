import { Test, TestingModule } from '@nestjs/testing';
import { ProductValuesController } from './product-values.controller';
import { ProductValuesService } from './product-values.service';

describe('ProductValuesController', () => {
  let controller: ProductValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductValuesController],
      providers: [ProductValuesService],
    }).compile();

    controller = module.get<ProductValuesController>(ProductValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
