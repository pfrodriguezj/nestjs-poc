import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Category } from './entity/Category';
import { CategoryDto } from './dtos/infrastructure/category.dto';
import { CategoryUsecasePort } from '../domain/category-usecase-port';
import { CategoryCreateMapper } from './mappers/category-create-mapper';
import { ApiTags } from '@nestjs/swagger';

@Controller('/category')
@ApiTags('category')
export class CategoryController {
  constructor(
    private readonly categoryApp: CategoryUsecasePort,
    private readonly categoryCreateMapper: CategoryCreateMapper,
  ) {}

  @Post()
  @HttpCode(204)
  async create(@Body() categoryDto: CategoryDto): Promise<Category> {
    return await this.categoryApp.create(
      this.categoryCreateMapper.mapToModel(categoryDto),
    );
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoryApp.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Category> {
    return await this.categoryApp.getById(id);
  }
}
