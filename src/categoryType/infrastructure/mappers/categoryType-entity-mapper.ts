import {Injectable} from '@nestjs/common';
import {MapperBase} from '../../../shared/domain/mapper/mapper-base';
import {CategoryType} from "../entity/categoryType.entity";
import {CategoryTypeModel} from "../../domain/categoryType-domain";

/**
 * This is a Mapper to convert from one structure to Another
 */
@Injectable()
export class CategoryTypeEntityMapper
  implements MapperBase<CategoryTypeModel, CategoryType | Partial<CategoryType>> {
  /**
   * Converts from Domain Model to specific Entity
   * @param model This is the Domain Model which needs to be used as our source of information
   * @returns This is the Entity resulting after the conversion/mapping
   */
  mapFromModel(model: CategoryTypeModel): Partial<CategoryType> {
    return {
      id: model.id,
      countryCode: model.countryCode,
      name: model.name,
      active: model.active,
    };
  }

  /**
   * Converts from Entity to our internal Domain Model
   * @param source This is the Entity from where we need to gather the information
   * @returns This is the Domain Model Object to return
   */
  mapToModel(source: CategoryType): CategoryTypeModel {
    return {
      id: source.id,
      countryCode: source.countryCode,
      name: source.name,
      active: source.active,
    };
  }
}
