import { Injectable } from '@nestjs/common';
import { Category } from '../infrastructure/entity/Category';
import { CategoryRepositoryPort } from '../domain/category-repository-port';

@Injectable()
export class CategoryGetAllUsecase {
  constructor(private readonly categoryRepository: CategoryRepositoryPort) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
