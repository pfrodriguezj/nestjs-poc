import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CountryService } from './country/country.service';
import { Country } from './country/country.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly countryService: CountryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/countries')
  getCountries(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}
