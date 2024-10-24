import { PartialType } from '@nestjs/mapped-types';
import { CreateProductValueDto } from './create-product-value.dto';

export class UpdateProductValueDto extends PartialType(CreateProductValueDto) {}
