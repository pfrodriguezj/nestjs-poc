import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryType {
  @PrimaryGeneratedColumn({ name: 'id_category_type' })
  id: number;

  @Column({name: 'country_code'})
  countryCode: string;

  @Column()
  name: string;

  @Column()
  active: boolean;


}
