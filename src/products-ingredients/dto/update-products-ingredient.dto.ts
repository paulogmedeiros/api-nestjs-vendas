import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsIngredientDto } from './create-products-ingredient.dto';

export class UpdateProductsIngredientDto extends PartialType(CreateProductsIngredientDto) {}
