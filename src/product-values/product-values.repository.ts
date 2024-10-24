import { Injectable } from '@nestjs/common';
import { ProductValues } from './entities/product-value.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductValuesRepository {
    constructor(
        @InjectRepository(ProductValues)
        private readonly _productValuesRepository: Repository<ProductValues>,
      ) {}
}
