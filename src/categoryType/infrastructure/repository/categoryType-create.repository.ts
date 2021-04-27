import {Inject, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {CategoryTypeModel} from "../../domain/categoryType-domain";
import {CategoryType} from "../entity/categoryType.entity";
import {CategoryTypeEntityMapper} from "../mappers/categoryType-entity-mapper";

@Injectable()
export class CategoryTypeCreateRepository {
  constructor(
      @Inject('CATEGORY_TYPE_REPOSITORY')
      private readonly categoryTypeRepository: Repository<CategoryType>,
    // private readonly logger: AppLogger,
    private readonly mapper: CategoryTypeEntityMapper,
  ) {}

  async create(model: CategoryTypeModel): Promise<CategoryTypeModel> {
    const newCategoryType = Object.assign(
      this.categoryTypeRepository.create(),
      this.mapper.mapFromModel(model),
    );
    const result = await this.categoryTypeRepository.save(newCategoryType);
    return this.mapper.mapToModel(result);
  }
}
