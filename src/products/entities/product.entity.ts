import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;
}
