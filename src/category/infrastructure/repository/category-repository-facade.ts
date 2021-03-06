import { Injectable } from '@nestjs/common';
import { CategoryGetAllRepository } from './category-getAll.repository';
import { CategoryCreateRepository } from './category-create.repository';
import { CategoryModel } from '../../domain/category-domain';
import { CategoryRepositoryPort } from '../../domain/category-repository-port';
import { CategoryFindByIdRepository } from './category-findById.repository';
import { CategoryDeleteByIdRepository } from "./category-deleteById.repository";

@Injectable()
export class CategoryRepositoryFacade implements CategoryRepositoryPort {
  constructor(
    // private readonly logger: AppLogger,
    private readonly categoryGetAll: CategoryGetAllRepository,
    private readonly categoryCreate: CategoryCreateRepository,
    private readonly categoryFindById: CategoryFindByIdRepository,
    private readonly categoryDeleteById: CategoryDeleteByIdRepository,
  ) {}

  async getAll(): Promise<Array<CategoryModel>> {
    return await this.categoryGetAll.getAll();
  }

  async create(model: CategoryModel): Promise<CategoryModel> {
    return await this.categoryCreate.create(model);
  }

  async findById(id: number): Promise<CategoryModel> {
    return await this.categoryFindById.findById(id);
  }

  async deleteById(id: number): Promise<void> {
    return await this.categoryDeleteById.deleteById(id);
  }
}
