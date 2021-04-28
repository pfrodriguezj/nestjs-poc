import { Injectable } from "@nestjs/common";
import { Category } from "../infrastructure/entity/Category";
import { CategoryRepositoryPort } from "../domain/category-repository-port";

@Injectable()
export class CategoryDeleteByIdUsecase {
  constructor(private readonly categoryRepository: CategoryRepositoryPort) {}

  async deleteById(id: number): Promise<void> {
    return this.categoryRepository.deleteById(id);
  }
}
