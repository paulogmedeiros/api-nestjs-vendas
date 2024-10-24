import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredients } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientsRepository {
    constructor(
        @InjectRepository(Ingredients)
        private readonly _ingredientsRepository: Repository<Ingredients>,
      ) {}
}
