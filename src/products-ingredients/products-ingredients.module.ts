import { Module } from '@nestjs/common';
import { ProductsIngredientsService } from './products-ingredients.service';
import { ProductsIngredientsController } from './products-ingredients.controller';
import { ProductsIngredientRepository } from './products-ingredient.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductValues } from 'src/product-values/entities/product-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductValues])],
  controllers: [ProductsIngredientsController],
  providers: [ProductsIngredientsService,ProductsIngredientRepository],
})
export class ProductsIngredientsModule {}
