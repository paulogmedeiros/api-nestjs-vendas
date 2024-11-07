import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';
import { Role } from '../enum/user.enum';
import * as bcrypt from 'bcrypt';
@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  password: string;

  @Column({ unique: true, length: 200 })
  @Index()
  email: string;

  @Column({ type: 'enum', enum: Role, nullable: false })
  @Index()
  role: Role;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;

  constructor(partial: Partial<Users>) {
    Object.assign(this, partial);
    this.createUserData();
    this.updateUserData();
  }

  public async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  public createUserData(): void {
    this.createdAt = this.getCurrentDateInBrasilia();
  }

  public updateUserData(): void {
    this.updatedAt = this.getCurrentDateInBrasilia();
  }

  public deleteUserData(): void {
    this.deletedAt = this.getCurrentDateInBrasilia();
  }

  private getCurrentDateInBrasilia = (): Date => {
    const now = new Date();
    const offset = -3 * 60; 
    return new Date(now.getTime() + offset * 60 * 1000);
  }
}
