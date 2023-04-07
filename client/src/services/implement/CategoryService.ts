import { CategoryModel } from "@/models/CategoryModel";
import { ICategoryService } from "../ICategoryService";
import { http } from "../utils/http";
import { url } from "inspector";

export class CategoryService implements ICategoryService {
    readonly baseUrl = process.env.apiUrl + '/api/category';
    getAll(): Promise<CategoryModel[]> {
        return http.get<CategoryModel[]>(this.baseUrl);
    }
    getById(id: Number): Promise<CategoryModel> {
        return http.get<CategoryModel>(this.baseUrl + `/${id}`);
    }
}