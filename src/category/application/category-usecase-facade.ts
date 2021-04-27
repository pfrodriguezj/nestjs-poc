import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from '../infrastructure/entity/Category';
import {CategoryDto} from "../infrastructure/dtos/infrastructure/category.dto";
import {CategoryType} from "../../categoryType/infrastructure/entity/categoryType.entity";
import {CategoryCreateUsecase} from "./category-create.usecase";
import {CategoryGetAllUsecase} from "./category-getAll.usecase";
import {CategoryModel} from "../domain/category-domain";
import {CategoryUsecasePort} from "../domain/category-usecase-port";

@Injectable()
export class CategoryUseCasesFacade implements CategoryUsecasePort {

  constructor(
      // private readonly logger: AppLogger,
      private readonly categoryCreate: CategoryCreateUsecase,
      private readonly categoryGetAll: CategoryGetAllUsecase,
  ){}

  async getAll(): Promise<Array<CategoryModel>> {
    return await this.categoryGetAll.findAll();
  }

  async create(model: CategoryModel): Promise<CategoryModel> {
    return await this.categoryCreate.createCategory(model);
  }
}
