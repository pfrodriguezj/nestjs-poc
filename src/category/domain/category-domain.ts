import {CategoryType} from "../../categoryType/infrastructure/entity/categoryType.entity";

export class CategoryModel {
    constructor(public id: number, public idCategoryType: CategoryType, public name: string, public active: boolean){}
}