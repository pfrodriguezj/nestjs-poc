import { Injectable } from '@nestjs/common';
import { CategoryCreateUsecase } from './category-create.usecase';
import { CategoryGetAllUsecase } from './category-getAll.usecase';
import { CategoryModel } from '../domain/category-domain';
import { CategoryUsecasePort } from '../domain/category-usecase-port';
import { CategoryFindByIdUsecase } from './category-findById.usecase';
import { CategoryDeleteByIdUsecase } from "./category-deleteById.usecase";

@Injectable()
export class CategoryUseCasesFacade implements CategoryUsecasePort {
  constructor(
    // private readonly logger: AppLogger,
    private readonly categoryCreate: CategoryCreateUsecase,
    private readonly categoryFindById: CategoryFindByIdUsecase,
    private readonly categoryDeleteById: CategoryDeleteByIdUsecase,
    private readonly categoryGetAll: CategoryGetAllUsecase,
  ) {}

  async getAll(): Promise<Array<CategoryModel>> {
    return await this.categoryGetAll.findAll();
  }

  async create(model: CategoryModel): Promise<CategoryModel> {
    return await this.categoryCreate.createCategory(model);
  }
  async getById(id: number): Promise<CategoryModel> {
    return await this.categoryFindById.findById(id);
  }

  async deleteById(id: number): Promise<void> {
    await this.getById(id);
    return await this.categoryDeleteById.deleteById(id);
  }
}
