import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductValueDto {
  @IsString()
  @IsNotEmpty()
  products_id: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}