import { CategoryTypeModel } from './categoryType-domain';

export abstract class CategoryTypeRepositoryPort {
  abstract getAll(): Promise<Array<CategoryTypeModel>>;
  abstract create(model: CategoryTypeModel): Promise<CategoryTypeModel>;
}
