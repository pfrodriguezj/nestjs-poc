import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../entity/Category';
import { CategoryModel } from '../../domain/category-domain';
import { CategoryEntityMapper } from '../mappers/category-entity-mapper';

@Injectable()
export class CategoryFindByIdRepository {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepository: Repository<Category>,
    // private readonly logger: AppLogger,
    private readonly mapper: CategoryEntityMapper,
  ) {
    // this.logger.info('CategoryTypeCreateRepository');
  }

  async findById(findId: number): Promise<CategoryModel> {
    const category = await this.categoryRepository.findOne(findId);
    if (!category) throw new NotFoundException();
    return this.mapper.mapToModel(category);
  }
}
