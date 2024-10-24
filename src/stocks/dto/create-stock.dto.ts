import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStockDto {
  @IsString()
  @IsNotEmpty()
  products_id: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;
}