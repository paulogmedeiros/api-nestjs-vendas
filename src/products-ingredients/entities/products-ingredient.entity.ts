import { Entity, CreateDateColumn, ManyToOne, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Products } from '../../products/entities/product.entity';
import { Ingredients } from '../../ingredients/entities/ingredient.entity';

@Entity('products_ingredients')
export class ProductsIngredients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Products, (product) => product.id,{ onDelete: 'SET NULL' })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @ManyToOne(() => Ingredients, (ingredient) => ingredient.id,{ onDelete: 'SET NULL' })
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: Ingredients;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt?: Date;
}
