import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Users } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<Users>{
    return await this._usersService.create(createUserDto);
  }

  @Get()
  public async findAll():Promise<Users[]> {
    return await this._usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Users> {
    return await this._usersService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<Users> {
    return await this._usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<void> {
    return this._usersService.remove(id);
  }
}
