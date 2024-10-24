import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Products } from '../../products/entities/product.entity';

@Entity('stocks')
export class Stocks {
  @PrimaryColumn()
  id: string;

  @Column()
  quantity: string;

  @ManyToOne(() => Products, (product) => product.id)
  product: Products;

  @CreateDateColumn()
  created_at: Date;
}
