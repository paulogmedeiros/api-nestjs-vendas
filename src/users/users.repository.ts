import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(Users)
        private readonly _usersRepository: Repository<Users>,
      ) {}
}
