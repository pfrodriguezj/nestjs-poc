import {Provider} from "@nestjs/common";
import {CategoryTypeEntityMapper} from "../infrastructure/mappers/categoryType-entity-mapper";
import {CategoryTypeCreateMapper} from "../infrastructure/mappers/categoryType-create-mapper";

const categoryTypeMappersConfig : Provider[] = [
  CategoryTypeEntityMapper,
  CategoryTypeCreateMapper
];

export default categoryTypeMappersConfig;