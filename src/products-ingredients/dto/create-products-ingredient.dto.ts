import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductsIngredientDto {
  @IsString()
  @IsNotEmpty()
  products_id: string;

  @IsString()
  @IsNotEmpty()
  ingredients_id: string;
}