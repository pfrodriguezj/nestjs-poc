import {Injectable} from "@nestjs/common";

import {MapperBase} from "../../../shared/domain/mapper/mapper-base";
import {CategoryTypeDto} from "../dtos/infrastructure/categoryType.dto";
import {CategoryTypeModel} from "../../domain/categoryType-domain";

/**
 * This is a Mapper to convert from one structure to Another
 */
@Injectable()
export class CategoryTypeCreateMapper implements MapperBase<CategoryTypeModel, CategoryTypeDto>{

  /**
   * Converts from Domain Model to specific DTO
   * @param model This is the Domain Model which needs to be used as our source of information
   * @returns This is the DTO resulting after the conversion
   */
  mapFromModel(model: CategoryTypeModel): CategoryTypeDto {
    return {
      name: model.name,
      countryCode: model.countryCode,
      active: model.active
    }
  }

  /**
   * Converts from DTO (using framework's validations DTO or Entity) to our internal Domain Model
   * @param dto This is the DTO/Entity from where we need to gather the information
   * @returns This is the Domain Model Object to return
   */
  mapToModel(dto: CategoryTypeDto): CategoryTypeModel {
    return {
      id: null,
      name: dto.name,
      countryCode: dto.countryCode,
      active: dto.active
    }
  }
}
