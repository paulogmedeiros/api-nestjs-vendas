import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Products } from '../../products/entities/product.entity';
import { Ingredients } from '../../ingredients/entities/ingredient.entity';

@Entity('products_ingredients')
export class ProductsIngredients {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Products, (product) => product.id)
  product: Products;

  @ManyToOne(() => Ingredients, (ingredient) => ingredient.id)
  ingredient: Ingredients;

  @CreateDateColumn()
  created_at: Date;
}
