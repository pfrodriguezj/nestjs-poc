import { Injectable } from '@nestjs/common';
import { CategoryType } from '../../categoryType/infrastructure/entity/categoryType.entity';
import { CategoryTypeRepositoryPort } from '../domain/categoryType-repository-port';

@Injectable()
export class CategoryTypeGetAllUsecase {
  constructor(
    private readonly categoryTypeRepository: CategoryTypeRepositoryPort,
  ) {}

  async findAll(): Promise<CategoryType[]> {
    return this.categoryTypeRepository.getAll();
  }
}
