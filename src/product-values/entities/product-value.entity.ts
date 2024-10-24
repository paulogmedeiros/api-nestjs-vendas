import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Products } from '../../products/entities/product.entity';

@Entity('product_values')
export class ProductValues {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Products, (product) => product.id)
  product: Products;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;
}
