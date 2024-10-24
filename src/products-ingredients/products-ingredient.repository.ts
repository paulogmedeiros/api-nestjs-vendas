import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductValues } from 'src/product-values/entities/product-value.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsIngredientRepository {
    constructor(
        @InjectRepository(ProductValues)
        private readonly _productValuesRepository: Repository<ProductValues>,
      ) {}
}
