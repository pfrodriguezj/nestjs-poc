import {Injectable} from "@nestjs/common";
import {CategoryTypeGetAllRepository} from "./categoryType-getAll.repository";
import {CategoryTypeCreateRepository} from "./categoryType-create.repository";
import {CategoryTypeModel} from "../../domain/categoryType-domain";
import {CategoryTypeRepositoryPort} from "../../domain/categoryType-repository-port";

@Injectable()
export class CategoryTypeRepositoryFacade implements CategoryTypeRepositoryPort {

    constructor(
        // private readonly logger: AppLogger,
        private readonly categoryTypeGetAll: CategoryTypeGetAllRepository,
        private readonly categoryTypeCreate: CategoryTypeCreateRepository
    ) {
    }

    async getAll(): Promise<Array<CategoryTypeModel>> {
        return await this.categoryTypeGetAll.getAll();
    }

    async create(model: CategoryTypeModel): Promise<CategoryTypeModel> {
        return await this.categoryTypeCreate.create(model);
    }

}
