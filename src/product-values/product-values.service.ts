import { Injectable } from '@nestjs/common';
import { CreateProductValueDto } from './dto/create-product-value.dto';
import { UpdateProductValueDto } from './dto/update-product-value.dto';

@Injectable()
export class ProductValuesService {
  create(createProductValueDto: CreateProductValueDto) {
    return 'This action adds a new productValue';
  }

  findAll() {
    return `This action returns all productValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productValue`;
  }

  update(id: number, updateProductValueDto: UpdateProductValueDto) {
    return `This action updates a #${id} productValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} productValue`;
  }
}
