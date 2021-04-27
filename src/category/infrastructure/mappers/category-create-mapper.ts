import {Injectable} from "@nestjs/common";

import {MapperBase} from "../../../shared/domain/mapper/mapper-base";
import {CategoryModel} from "../../domain/category-domain";
import {CategoryDto} from "../dtos/infrastructure/category.dto";
import {CategoryType} from "../../../categoryType/infrastructure/entity/categoryType.entity";

/**
 * This is a Mapper to convert from one structure to Another
 */
@Injectable()
export class CategoryCreateMapper implements MapperBase<CategoryModel, CategoryDto>{

  /**
   * Converts from Domain Model to specific DTO
   * @param model This is the Domain Model which needs to be used as our source of information
   * @returns This is the DTO resulting after the conversion
   */
  mapFromModel(model: CategoryModel): CategoryDto {
    return {
      name: model.name,
      idCategoryType: model.idCategoryType.id,
      active: model.active
    }
  }

  /**
   * Converts from DTO (using framework's validations DTO or Entity) to our internal Domain Model
   * @param dto This is the DTO/Entity from where we need to gather the information
   * @returns This is the Domain Model Object to return
   */
  mapToModel(dto: CategoryDto): CategoryModel {
    const categoryType : CategoryType = new CategoryType();
    categoryType.id = dto.idCategoryType;
    return {
      id: null,
      name: dto.name,
      idCategoryType: categoryType,
      active: dto.active
    }
  }
}
