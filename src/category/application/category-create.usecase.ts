import { Injectable } from '@nestjs/common';
import { Category } from '../infrastructure/entity/Category';
import { CategoryModel } from '../domain/category-domain';
import { CategoryRepositoryPort } from '../domain/category-repository-port';

@Injectable()
export class CategoryCreateUsecase {
  constructor(private readonly categoryRepository: CategoryRepositoryPort) {}

  async createCategory(model: CategoryModel): Promise<Category> {
    return this.categoryRepository.create(model);
  }
}
