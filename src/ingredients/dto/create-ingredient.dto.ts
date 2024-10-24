import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}