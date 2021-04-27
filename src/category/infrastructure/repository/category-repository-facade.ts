import {Injectable} from "@nestjs/common";
import {CategoryGetAllRepository} from "./category-getAll.repository";
import {CategoryCreateRepository} from "./category-create.repository";
import {CategoryModel} from "../../domain/category-domain";
import {CategoryRepositoryPort} from "../../domain/category-repository-port";

@Injectable()
export class CategoryRepositoryFacade implements CategoryRepositoryPort {

    constructor(
        // private readonly logger: AppLogger,
        private readonly categoryGetAll: CategoryGetAllRepository,
        private readonly categoryCreate: CategoryCreateRepository
    ) {
    }

    async getAll(): Promise<Array<CategoryModel>> {
        return await this.categoryGetAll.getAll();
    }

    async create(model: CategoryModel): Promise<CategoryModel> {
        return await this.categoryCreate.create(model);
    }

}
