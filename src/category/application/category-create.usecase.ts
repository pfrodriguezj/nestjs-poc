import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../infrastructure/entity/Category';
import {CategoryDto} from "../infrastructure/dtos/infrastructure/category.dto";
import {CategoryType} from "../../categoryType/infrastructure/entity/categoryType.entity";
import {CategoryModel} from "../domain/category-domain";
import {CategoryRepositoryPort} from "../domain/category-repository-port";

@Injectable()
export class CategoryCreateUsecase {
  constructor(
    private readonly categoryRepository: CategoryRepositoryPort,
  ) {}

  async createCategory(model: CategoryModel): Promise<Category> {
    return this.categoryRepository.create(model);
  }

}
