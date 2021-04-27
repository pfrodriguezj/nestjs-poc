import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Category} from "../entity/Category";
import {CategoryModel} from "../../domain/category-domain";
import {CategoryEntityMapper} from "../mappers/category-entity-mapper";

@Injectable()
export class CategoryCreateRepository {
  constructor(
      @Inject('CATEGORY_REPOSITORY')
      private readonly categoryRepository: Repository<Category>,
    // private readonly logger: AppLogger,
    private readonly mapper: CategoryEntityMapper,
  ) {
    // this.logger.info('CategoryTypeCreateRepository');
  }

  async create(model: CategoryModel): Promise<CategoryModel> {
    const newCategory = Object.assign(
      this.categoryRepository.create(),
      this.mapper.mapFromModel(model),
    );
    const result = await this.categoryRepository.save(newCategory);
    return this.mapper.mapToModel(result);
  }
}
