import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  public async create(createUserDto: CreateUserDto): Promise<Users> {
    await this.validateEmail(createUserDto.email);
    const user = new Users(createUserDto);
    await user.hashPassword();
    return await this._usersRepository.insertUser(user);
  }

  public async findAll(): Promise<Users[]> {
    return await this._usersRepository.selectAllUser();
  }

  public async findOne(id: string): Promise<Users> {
    const user = await this._usersRepository.selectUserById(id);
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  public async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Users> {
    const user = await this.findOne(id);
    if (updateUserDto.email) {
      if (updateUserDto.email != user.email) {
        await this.validateEmail(updateUserDto.email);
      }
    }
    user.updateUserData();
    return await this._usersRepository.updateUser(user, updateUserDto);
  }

  public async remove(id: string): Promise<void> {
    await this.findOne(id);
    return await this._usersRepository.deleteUser(id);
  }

  private async findUserByEmail(email: Users['email']): Promise<Users> {
    return await this._usersRepository.selectUserByEmail(email);
  }

  private async validateEmail(email: Users['email']): Promise<void>  {
    const emailExist = await this.findUserByEmail(email);
    if (emailExist) throw new BadRequestException('Esse endereço de email já está em uso');
  }
}
