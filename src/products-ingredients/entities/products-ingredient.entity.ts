import { Entity, CreateDateColumn, ManyToOne, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Products } from '../../products/entities/product.entity';
import { Ingredients } from '../../ingredients/entities/ingredient.entity';

@Entity('products_ingredients')
export class ProductsIngredients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Products, (product) => product.id)
  product: Products;

  @ManyToOne(() => Ingredients, (ingredient) => ingredient.id)
  ingredient: Ingredients;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
