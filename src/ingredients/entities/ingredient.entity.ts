import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Unit } from '../enum/ingredient.enum'; 

@Entity('ingredients')
export class Ingredients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  quantity?: number;

  @Column({ type: 'enum', enum: Unit, nullable: true })
  unit?: Unit;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })  
  deletedAt?: Date;
}
