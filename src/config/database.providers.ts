import { createConnection } from 'typeorm';
import {Category} from "../category/infrastructure/entity/Category";
import {CategoryType} from "../categoryType/infrastructure/entity/categoryType.entity";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT || '3306'),
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'PASSWORD',
        database: process.env.DB_NAME || 'poc_type_orm',
        entities: [Category, CategoryType],
        synchronize: false,
      }),
  },
];
