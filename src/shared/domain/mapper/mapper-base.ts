/**
 * This is a Mapper to convert from one structure to Another
 */
export abstract class MapperBase<MODEL, DTO> {

  /**
   * Converts from Domain Model to specific DTO or Entity
   * @param model This is the Domain Model which needs to be used as our source of information
   * @returns This is the DTO/Entity resulting after the conversion
   */
  abstract mapFromModel(model: MODEL): DTO;

  /**
   * Converts from DTO or Entity to our internal Domain Model
   * @param dto This is the DTO/Entity from where we need to gather the information
   * @returns This is the Domain Model Object to return
   */
  abstract mapToModel(dto: DTO): MODEL;

}
