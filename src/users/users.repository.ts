import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Users)
    private readonly _usersRepository: Repository<Users>,
  ) {}

  public async insertUser(user: Users ): Promise<Users> {
    return await this._usersRepository.save(user);
  }

  public async selectAllUser(): Promise<Users[]> {
    return await this._usersRepository.find();
  }

  public async selectUserById(id:string): Promise<Users> {
    return this._usersRepository.findOne({ where: { id } });
  }

  public async updateUser(user: Users, newData: UpdateUserDto): Promise<Users>{
    this._usersRepository.merge(user,newData);
    return await this._usersRepository.save(user);
  }

  public async deleteUser(id: string): Promise<void> {
    await this._usersRepository.delete(id);
  }
}
