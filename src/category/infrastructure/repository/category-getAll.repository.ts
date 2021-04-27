import {Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CategoryEntityMapper} from "../mappers/category-entity-mapper";
import {CategoryModel} from "../../domain/category-domain";
import {Category} from "../entity/Category";
import {CategoryType} from "../../../categoryType/infrastructure/entity/categoryType.entity";

@Injectable()
export class CategoryGetAllRepository {
  constructor(
      @Inject('CATEGORY_REPOSITORY')
      private readonly categoryRepository: Repository<Category>,
    private readonly mapper: CategoryEntityMapper,
  ) {
  }

  async getAll(): Promise<Array<CategoryModel>> {
    const categories = await this.categoryRepository.find();
    return categories.map(e => this.mapper.mapToModel(e));
  }


}