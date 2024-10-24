import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('ingredients')
export class Ingredients {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}
