import { Module } from '@nestjs/common';
import { ProductValuesService } from './product-values.service';
import { ProductValuesController } from './product-values.controller';
import { ProductValuesRepository } from './product-values.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductValues } from './entities/product-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductValues])],
  controllers: [ProductValuesController],
  providers: [ProductValuesService,ProductValuesRepository],
})
export class ProductValuesModule {}
