import {Provider} from "@nestjs/common";
import {CategoryEntityMapper} from "../infrastructure/mappers/category-entity-mapper";
import {CategoryCreateMapper} from "../infrastructure/mappers/category-create-mapper";

const categoryMappersConfig : Provider[] = [
  CategoryEntityMapper,
  CategoryCreateMapper
];

export default categoryMappersConfig;