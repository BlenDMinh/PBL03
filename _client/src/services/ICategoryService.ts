import { CategoryModel } from "@/models/CategoryModel";

export interface ICategoryService {
    getAll(): Promise<CategoryModel[]>;
    getById(id: Number): Promise<CategoryModel>;
}