import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { CategoryController } from './infrastructure/category.controller';
import { categoryProviders } from './category.providers';
import { CategoryGetAllUsecase } from './application/category-getAll.usecase';
import {CategoryUseCasesFacade} from "./application/category-usecase-facade";
import categoryUseCaseConfig from "./config/category-application.config";
import categoryMappersConfig from "./config/category-mappers.config";
import categoryRepositoryConfig from "./config/category-repository.config";

@Module({
  imports: [DatabaseModule],
  providers: [...categoryUseCaseConfig, ...categoryMappersConfig, ...categoryRepositoryConfig, ...categoryProviders],
  controllers: [CategoryController]
})
export class CategoryModule {}
