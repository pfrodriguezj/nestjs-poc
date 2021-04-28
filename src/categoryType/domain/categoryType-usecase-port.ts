import { CategoryTypeModel } from './categoryType-domain';

export abstract class CategoryTypeUsecasePort {
  abstract getAll(): Promise<Array<CategoryTypeModel>>;

  abstract create(model: CategoryTypeModel): Promise<CategoryTypeModel>;
}
