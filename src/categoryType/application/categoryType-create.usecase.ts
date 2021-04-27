import {Injectable} from '@nestjs/common';
import {CategoryTypeModel} from "../domain/categoryType-domain";
import {CategoryType} from "../infrastructure/entity/categoryType.entity";
import {CategoryTypeRepositoryPort} from "../domain/categoryType-repository-port";

@Injectable()
export class CategoryTypeCreateUsecase {
  constructor(
    private readonly categoryTypeRepository: CategoryTypeRepositoryPort,
  ) {}

  async createCategory(model: CategoryTypeModel): Promise<CategoryType> {
    return this.categoryTypeRepository.create(model);
  }

}
