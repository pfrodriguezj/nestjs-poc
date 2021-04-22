import { Connection, Repository } from 'typeorm';
import { Country } from './country.entity';

export const countryProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Country),
    inject: ['DATABASE_CONNECTION'],
  },
];
