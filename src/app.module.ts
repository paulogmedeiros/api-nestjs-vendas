import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductValuesModule } from './product-values/product-values.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ProductsIngredientsModule } from './products-ingredients/products-ingredients.module';
import { Users } from './users/entities/user.entity';
import { Ingredients } from './ingredients/entities/ingredient.entity';
import { Products } from './products/entities/product.entity';
import { ProductsIngredients } from './products-ingredients/entities/products-ingredient.entity';
import { ProductValues } from './product-values/entities/product-value.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([
      Users,
      Ingredients,
      Products,
      ProductsIngredients,
      ProductValues,
    ]),
    UsersModule,
    ProductsModule,
    ProductValuesModule,
    IngredientsModule,
    ProductsIngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
