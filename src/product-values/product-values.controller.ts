import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductValuesService } from './product-values.service';
import { CreateProductValueDto } from './dto/create-product-value.dto';
import { UpdateProductValueDto } from './dto/update-product-value.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('product-values')
@Controller('product-values')
export class ProductValuesController {
  constructor(private readonly productValuesService: ProductValuesService) {}

  @Post()
  create(@Body() createProductValueDto: CreateProductValueDto) {
    return this.productValuesService.create(createProductValueDto);
  }

  @Get()
  findAll() {
    return this.productValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productValuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductValueDto: UpdateProductValueDto) {
    return this.productValuesService.update(+id, updateProductValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productValuesService.remove(+id);
  }
}
