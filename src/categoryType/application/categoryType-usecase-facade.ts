import {Injectable} from '@nestjs/common';
import {CategoryTypeCreateUsecase} from "./categoryType-create.usecase";
import {CategoryTypeGetAllUsecase} from "./categoryType-getAll.usecase";
import {CategoryTypeUsecasePort} from "../domain/categoryType-usecase-port";
import {CategoryTypeModel} from "../domain/categoryType-domain";

@Injectable()
export class CategoryTypeUseCasesFacade implements CategoryTypeUsecasePort {

  constructor(
      // private readonly logger: AppLogger,
      private readonly categoryTypeCreate: CategoryTypeCreateUsecase,
      private readonly categoryTypeGetAll: CategoryTypeGetAllUsecase,
  ){}

  async getAll(): Promise<Array<CategoryTypeModel>> {
    return await this.categoryTypeGetAll.findAll();
  }

  async create(model: CategoryTypeModel): Promise<CategoryTypeModel> {
    return await this.categoryTypeCreate.createCategory(model);
  }
}
