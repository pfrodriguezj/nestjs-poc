import { Connection } from 'typeorm';
import { CategoryType } from './infrastructure/entity/categoryType.entity';

export const categoryTypeProviders = [
  {
    provide: 'CATEGORY_TYPE_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(CategoryType),
    inject: ['DATABASE_CONNECTION'],
  },
];
