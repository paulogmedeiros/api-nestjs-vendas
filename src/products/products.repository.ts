import { Injectable } from '@nestjs/common';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Products)
        private readonly _productsRepository: Repository<Products>,
      ) {}
}
