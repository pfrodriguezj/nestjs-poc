import { CategoryModel } from './category-domain';

export abstract class CategoryUsecasePort {
  abstract getAll(): Promise<Array<CategoryModel>>;

  abstract create(model: CategoryModel): Promise<CategoryModel>;

  abstract getById(id: number): Promise<CategoryModel>;

  abstract deleteById(id: number): Promise<void>;
}
