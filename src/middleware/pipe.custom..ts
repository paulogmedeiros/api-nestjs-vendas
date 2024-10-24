import { ArgumentMetadata, BadRequestException, ParseUUIDPipe } from '@nestjs/common';

export class CustomParseUUIDPipe extends ParseUUIDPipe {
  constructor() {
    super();
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      throw new BadRequestException('O ID fornecido não é um UUID válido.');
    }
  }
}