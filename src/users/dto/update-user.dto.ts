import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../enum/user.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;

  @ApiPropertyOptional({ example: 'password123' })
  password?: string;

  @ApiPropertyOptional({ example: 'john.doe@example.com' })
  email?: string;

  @ApiPropertyOptional({ example: Role.ADMINISTRATOR })
  role?: Role;
}
