import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CategoryType } from './infrastructure/entity/categoryType.entity';
import { CategoryTypeUsecasePort } from './domain/categoryType-usecase-port';
import { CategoryTypeCreateMapper } from './infrastructure/mappers/categoryType-create-mapper';
import { ApiTags } from "@nestjs/swagger";

@Controller('/categoryType')
@ApiTags('categoryType')
export class CategoryTypeController {
  constructor(
    private readonly categoryTypeApp: CategoryTypeUsecasePort,
    private readonly categoryTypeCreateMapper: CategoryTypeCreateMapper,
  ) {}

  @Post()
  @HttpCode(204)
  create(@Body() categoryType: CategoryType): Promise<CategoryType> {
    return this.categoryTypeApp.create(categoryType);
  }

  @Get()
  findAll(): Promise<CategoryType[]> {
    return this.categoryTypeApp.getAll();
  }
}
