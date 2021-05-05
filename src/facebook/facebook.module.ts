import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { FacebookController } from './infrastructure/facebook.controller';

@Module({
  imports: [DatabaseModule],
  providers: [],
  controllers: [FacebookController],
})
export class FacebookModule {}
