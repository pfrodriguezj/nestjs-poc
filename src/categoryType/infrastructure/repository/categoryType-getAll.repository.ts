import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {CategoryType} from "../entity/categoryType.entity";
import {CategoryTypeModel} from "../../domain/categoryType-domain";
import {CategoryTypeEntityMapper} from "../mappers/categoryType-entity-mapper";

@Injectable()
export class CategoryTypeGetAllRepository {
  constructor(
      @Inject('CATEGORY_TYPE_REPOSITORY')
      private readonly categoryTypeRepository: Repository<CategoryType>,
    private readonly mapper: CategoryTypeEntityMapper,
  ) {
  }

  async getAll(): Promise<Array<CategoryTypeModel>> {
    const categories = await this.categoryTypeRepository.find();
    return categories.map(e => this.mapper.mapToModel(e));
  }


}