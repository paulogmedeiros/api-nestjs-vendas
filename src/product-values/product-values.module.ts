import { Module } from '@nestjs/common';
import { ProductValuesService } from './product-values.service';
import { ProductValuesController } from './product-values.controller';

@Module({
  controllers: [ProductValuesController],
  providers: [ProductValuesService],
})
export class ProductValuesModule {}
