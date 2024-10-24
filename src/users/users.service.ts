import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  public async create(createUserDto: CreateUserDto): Promise<Users> {
    const user = new Users(createUserDto);
    await user.hashPassword();
    return await this._usersRepository.insertUser(user);
  }

  public async findAll(): Promise<Users[]> {
    return await this._usersRepository.selectAllUser();
  }

  public async findOne(id: string): Promise<Users> {
    return await this._usersRepository.selectUserById(id);
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    const user = await this.findOne(id);
    if(!user){
      return null
    }
    return await this._usersRepository.updateUser(user,updateUserDto)
  }

  public async remove(id: string) {
    const user = await this.findOne(id);
    if(!user){
      return null
    }
    return await this._usersRepository.deleteUser(id);
  }
}
