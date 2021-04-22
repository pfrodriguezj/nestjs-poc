import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { countryProviders } from './country.providers';
import { CountryService } from './country.service';

@Module({
  imports: [DatabaseModule],
  providers: [...countryProviders, CountryService],
})
export class CountryModule {}
