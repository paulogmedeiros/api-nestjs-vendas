import { Test, TestingModule } from '@nestjs/testing';
import { ProductValuesService } from './product-values.service';

describe('ProductValuesService', () => {
  let service: ProductValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductValuesService],
    }).compile();

    service = module.get<ProductValuesService>(ProductValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
