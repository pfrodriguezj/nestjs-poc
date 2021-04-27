import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../infrastructure/entity/Category';
import {CategoryDto} from "../infrastructure/dtos/infrastructure/category.dto";
import {CategoryType} from "../../categoryType/infrastructure/entity/categoryType.entity";
import {CategoryRepositoryPort} from "../domain/category-repository-port";

@Injectable()
export class CategoryGetAllUsecase {
  constructor(
    private readonly categoryRepository: CategoryRepositoryPort,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
