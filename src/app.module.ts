import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './config/database.module';
import { CategoryTypeModule } from './categoryType/categoryType.module';
import { FacebookStrategy } from './facebook/facebook.strategy';
import { FacebookModule } from './facebook/facebook.module';

@Module({
  imports: [DatabaseModule, CategoryModule, CategoryTypeModule, FacebookModule],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {}
