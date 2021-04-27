import {Column, Entity} from 'typeorm';

export class CategoryTypeDto {
  countryCode: string;

  name: string;

  active: boolean;
}
