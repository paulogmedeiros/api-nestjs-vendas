import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { IngredientsRepository } from './ingredients.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredients } from './entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredients])],
  controllers: [IngredientsController],
  providers: [IngredientsService,IngredientsRepository],
  exports: [IngredientsService],
})
export class IngredientsModule {}
