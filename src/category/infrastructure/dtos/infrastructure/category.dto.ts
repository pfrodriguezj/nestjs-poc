import {Entity} from 'typeorm';

@Entity()
export class CategoryDto {
  idCategoryType: number;
  name: string;
  active: boolean;
}
