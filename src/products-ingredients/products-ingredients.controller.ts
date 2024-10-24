import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsIngredientsService } from './products-ingredients.service';
import { CreateProductsIngredientDto } from './dto/create-products-ingredient.dto';
import { UpdateProductsIngredientDto } from './dto/update-products-ingredient.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products-ingredients')
@Controller('products-ingredients')
export class ProductsIngredientsController {
  constructor(private readonly productsIngredientsService: ProductsIngredientsService) {}

  @Post()
  create(@Body() createProductsIngredientDto: CreateProductsIngredientDto) {
    return this.productsIngredientsService.create(createProductsIngredientDto);
  }

  @Get()
  findAll() {
    return this.productsIngredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsIngredientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsIngredientDto: UpdateProductsIngredientDto) {
    return this.productsIngredientsService.update(+id, updateProductsIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsIngredientsService.remove(+id);
  }
}
