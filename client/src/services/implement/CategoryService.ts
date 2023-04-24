import { http } from "../utils/http";
import { Category } from "@/models/Category";
import { ICategoryService } from "../ICategoryService";

export class CategoryService implements ICategoryService {
  readonly baseUrl = process.env.apiUrl + "/api/category";
  getAll(): Promise<Category[]> {
    return http.get<Category[]>(this.baseUrl);
  }
  getById(id: Number): Promise<Category> {
    return http.get<Category>(this.baseUrl + `/${id}`);
  }
}
