import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../entity/Category';
import { CategoryModel } from '../../domain/category-domain';
import { CategoryEntityMapper } from '../mappers/category-entity-mapper';

@Injectable()
export class CategoryDeleteByIdRepository {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepository: Repository<Category>,
    // private readonly logger: AppLogger,
    private readonly mapper: CategoryEntityMapper,
  ) {
    // this.logger.info('CategoryTypeCreateRepository');
  }

  async deleteById(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
