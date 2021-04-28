import { Provider } from '@nestjs/common';

import { CategoryGetAllRepository } from '../infrastructure/repository/category-getAll.repository';
import { CategoryCreateRepository } from '../infrastructure/repository/category-create.repository';
import { CategoryRepositoryPort } from '../domain/category-repository-port';
import { CategoryRepositoryFacade } from '../infrastructure/repository/category-repository-facade';
import { CategoryFindByIdRepository } from '../infrastructure/repository/category-findById.repository';
import { CategoryDeleteByIdRepository } from '../infrastructure/repository/category-deleteById.repository';

const categoryRepositoryConfig: Provider[] = [
  CategoryGetAllRepository,
  CategoryCreateRepository,
  CategoryFindByIdRepository,
  CategoryDeleteByIdRepository,

  {
    provide: CategoryRepositoryPort,
    useClass: CategoryRepositoryFacade,
  },
];

export default categoryRepositoryConfig;
