import { CategoryModel } from './category-domain';

export abstract class CategoryRepositoryPort {

  abstract getAll(): Promise<Array<CategoryModel>>;
  abstract create(model: CategoryModel): Promise<CategoryModel>;
  abstract findById(id: number): Promise<CategoryModel>;
  abstract deleteById(id: number): void;
}
