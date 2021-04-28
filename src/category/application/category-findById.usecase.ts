import { Injectable } from '@nestjs/common';
import { Category } from '../infrastructure/entity/Category';
import { CategoryRepositoryPort } from '../domain/category-repository-port';

@Injectable()
export class CategoryFindByIdUsecase {
  constructor(private readonly categoryRepository: CategoryRepositoryPort) {}

  async findById(id: number): Promise<Category> {
    return this.categoryRepository.findById(id);
  }
}
