import { Entity, Column, CreateDateColumn, ManyToOne, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Products } from '../../products/entities/product.entity';

@Entity('product_values')
export class ProductValues {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Products, (product) => product.id,{ onDelete: 'SET NULL' })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
