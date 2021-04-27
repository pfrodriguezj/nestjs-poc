import { createConnection } from 'typeorm';
import {Category} from "../category/infrastructure/entity/Category";
import {CategoryType} from "../categoryType/infrastructure/entity/categoryType.entity";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3406,
        username: 'root',
        password: 'globant.0',
        database: 'mydockerdb',
        entities: [Category, CategoryType],
        synchronize: false,
      }),
  },
];
