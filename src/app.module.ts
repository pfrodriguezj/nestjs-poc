import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './config/database.module';
import {CategoryTypeModel} from "./categoryType/domain/categoryType-domain";
import {CategoryTypeModule} from "./categoryType/categoryType.module";

@Module({
  imports: [DatabaseModule, CategoryModule, CategoryTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
