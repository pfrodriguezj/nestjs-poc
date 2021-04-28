import { Provider } from '@nestjs/common';
import { CategoryGetAllUsecase } from '../application/category-getAll.usecase';
import { CategoryCreateUsecase } from '../application/category-create.usecase';
import { CategoryUsecasePort } from '../domain/category-usecase-port';
import { CategoryUseCasesFacade } from '../application/category-usecase-facade';
import { CategoryFindByIdUsecase } from '../application/category-findById.usecase';
import { CategoryDeleteByIdUsecase } from '../application/category-deleteById.usecase';

const categoryUseCaseConfig: Provider[] = [
  CategoryGetAllUsecase,
  CategoryCreateUsecase,
  CategoryFindByIdUsecase,
  CategoryDeleteByIdUsecase,

  {
    provide: CategoryUsecasePort,
    useClass: CategoryUseCasesFacade,
  },
];

export default categoryUseCaseConfig;
