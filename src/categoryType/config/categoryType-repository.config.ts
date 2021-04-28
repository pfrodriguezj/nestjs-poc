import { Provider } from '@nestjs/common';
import { CategoryTypeRepositoryFacade } from '../infrastructure/repository/categoryType-repository-facade';
import { CategoryTypeCreateRepository } from '../infrastructure/repository/categoryType-create.repository';
import { CategoryTypeGetAllRepository } from '../infrastructure/repository/categoryType-getAll.repository';
import { CategoryTypeRepositoryPort } from '../domain/categoryType-repository-port';

const categoryTypeRepositoryConfig: Provider[] = [
  CategoryTypeGetAllRepository,
  CategoryTypeCreateRepository,

  {
    provide: CategoryTypeRepositoryPort,
    useClass: CategoryTypeRepositoryFacade,
  },
];

export default categoryTypeRepositoryConfig;
