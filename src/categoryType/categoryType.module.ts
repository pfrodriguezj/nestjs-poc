import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import categoryTypeUseCaseConfig from './config/categoryType-application.config';
import categoryTypeMappersConfig from './config/categoryType-mappers.config';
import categoryTypeRepositoryConfig from './config/categoryType-repository.config';
import { categoryTypeProviders } from './categoryType.providers';
import { CategoryTypeController } from './infrastructure/categoryType.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...categoryTypeUseCaseConfig,
    ...categoryTypeMappersConfig,
    ...categoryTypeRepositoryConfig,
    ...categoryTypeProviders,
  ],
  controllers: [CategoryTypeController],
})
export class CategoryTypeModule {}
