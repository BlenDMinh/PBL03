import "reflect-metadata";
import { z } from "zod";
import { CategoriesSchema, CategorySchema } from "../../models/Category";
import { ICategoryService } from "../ICategoryService";
import { http } from "../utils/http";

export class CategoryService implements ICategoryService {
  // readonly baseUrl = import.meta.env.VITE_API_URL + "/api/category";
  readonly baseUrl = "http://localhost:8080/api/category";

  async getAll(): Promise<z.infer<typeof CategoriesSchema>> {
    const data = await http.get(this.baseUrl);
    return CategoriesSchema.parse(data);
  }

  async getById(id: number): Promise<z.infer<typeof CategorySchema>> {
    const data = await http.get(this.baseUrl + `/${id}`);
    return CategorySchema.parse(data);
  }
}
