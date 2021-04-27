import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CategoryType} from "../../../categoryType/infrastructure/entity/categoryType.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'id_category' })
  id: number;

  @ManyToOne(type => CategoryType, categoryType => categoryType.id)
  @JoinColumn({ name: 'id_category_type' })
  idCategoryType: CategoryType;

  @Column()
  name: string;

  @Column()
  active: boolean;

}

