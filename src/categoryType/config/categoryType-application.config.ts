import {Provider} from "@nestjs/common";
import {CategoryTypeGetAllUsecase} from "../application/categoryType-getAll.usecase";
import {CategoryTypeCreateUsecase} from "../application/categoryType-create.usecase";
import {CategoryTypeUseCasesFacade} from "../application/categoryType-usecase-facade";
import {CategoryTypeUsecasePort} from "../domain/categoryType-usecase-port";

const categoryTypeUseCaseConfig: Provider[] = [

  CategoryTypeGetAllUsecase,
  CategoryTypeCreateUsecase,

  {
    provide: CategoryTypeUsecasePort,
    useClass: CategoryTypeUseCasesFacade
  }

];

export default categoryTypeUseCaseConfig;