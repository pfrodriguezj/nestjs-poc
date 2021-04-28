import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntityMapper } from '../mappers/category-entity-mapper';
import { CategoryModel } from '../../domain/category-domain';
import { Category } from '../entity/Category';

@Injectable()
export class CategoryGetAllRepository {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepository: Repository<Category>,
    private readonly mapper: CategoryEntityMapper,
  ) {}

  async getAll(): Promise<Array<Category>> {
    const categories = await this.categoryRepository.find();
    return categories.map((e) => this.mapper.mapToModel(e));
  }
}
