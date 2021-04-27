import {Provider} from "@nestjs/common";
import {CategoryGetAllUsecase} from "../application/category-getAll.usecase";
import {CategoryCreateUsecase} from "../application/category-create.usecase";
import {CategoryUsecasePort} from "../domain/category-usecase-port";
import {CategoryUseCasesFacade} from "../application/category-usecase-facade";

const categoryUseCaseConfig: Provider[] = [

  CategoryGetAllUsecase,
  CategoryCreateUsecase,

  {
    provide: CategoryUsecasePort,
    useClass: CategoryUseCasesFacade
  }

];

export default categoryUseCaseConfig;