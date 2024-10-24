import { Test, TestingModule } from '@nestjs/testing';
import { ProductsIngredientsController } from './products-ingredients.controller';
import { ProductsIngredientsService } from './products-ingredients.service';

describe('ProductsIngredientsController', () => {
  let controller: ProductsIngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsIngredientsController],
      providers: [ProductsIngredientsService],
    }).compile();

    controller = module.get<ProductsIngredientsController>(ProductsIngredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
