import { Injectable } from '@nestjs/common';
import { CreateProductsIngredientDto } from './dto/create-products-ingredient.dto';
import { UpdateProductsIngredientDto } from './dto/update-products-ingredient.dto';

@Injectable()
export class ProductsIngredientsService {
  create(createProductsIngredientDto: CreateProductsIngredientDto) {
    return 'This action adds a new productsIngredient';
  }

  findAll() {
    return `This action returns all productsIngredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsIngredient`;
  }

  update(id: number, updateProductsIngredientDto: UpdateProductsIngredientDto) {
    return `This action updates a #${id} productsIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsIngredient`;
  }
}
