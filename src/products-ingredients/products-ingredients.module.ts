import { Module } from '@nestjs/common';
import { ProductsIngredientsService } from './products-ingredients.service';
import { ProductsIngredientsController } from './products-ingredients.controller';

@Module({
  controllers: [ProductsIngredientsController],
  providers: [ProductsIngredientsService],
})
export class ProductsIngredientsModule {}
