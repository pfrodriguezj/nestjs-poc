import {Injectable} from '@nestjs/common';

import {MapperBase} from '../../../shared/domain/mapper/mapper-base';
import {Category} from "../entity/Category";
import {CategoryModel} from "../../domain/category-domain";

/**
 * This is a Mapper to convert from one structure to Another
 */
@Injectable()
export class CategoryEntityMapper
  implements MapperBase<CategoryModel, Category | Partial<Category>> {
  /**
   * Converts from Domain Model to specific Entity
   * @param model This is the Domain Model which needs to be used as our source of information
   * @returns This is the Entity resulting after the conversion/mapping
   */
  mapFromModel(model: CategoryModel): Partial<Category> {
    return {
      id: model.id,
      idCategoryType: model.idCategoryType,
      name: model.name,
      active: model.active,
    };
  }

  /**
   * Converts from Entity to our internal Domain Model
   * @param source This is the Entity from where we need to gather the information
   * @returns This is the Domain Model Object to return
   */
  mapToModel(source: Category): CategoryModel {
    return {
      id: source.id,
      idCategoryType: source.idCategoryType,
      name: source.name,
      active: source.active,
    };
  }
}
