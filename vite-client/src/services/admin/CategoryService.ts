import "reflect-metadata";
import { z } from "zod";
import { ICategoryService } from "../../interface/admin/ICategoryService";
import {
  CategoriesSchema,
  Category,
  CategorySchema,
} from "../../models/Category";
import { http } from "../../utils/http";

export class CategoryService implements ICategoryService {
  private static instance: CategoryService;
  public static getInstance(): CategoryService {
    if (!CategoryService.instance)
      CategoryService.instance = new CategoryService();
    return CategoryService.instance;
  }

  private constructor() {
    return;
  }

  // readonly baseUrl = import.meta.env.VITE_API_URL + "/api/category";
  readonly baseUrl = "http://localhost:8080/api/category";

  async getAll(): Promise<z.infer<typeof CategoriesSchema>> {
    return http
      .get(this.baseUrl)
      .then(
        (e) => CategoriesSchema.parse(e) as z.infer<typeof CategoriesSchema>
      );
  }

  async getById(id: number): Promise<z.infer<typeof CategorySchema>> {
    return http
      .get(this.baseUrl + `/${id}`)
      .then<z.infer<typeof CategorySchema>>(
        (e) => CategorySchema.parse(e) as z.infer<typeof CategorySchema>
      );
  }

  insert(category: Category): Promise<z.infer<typeof CategorySchema>> {
    return http.post(this.baseUrl, new Headers(), JSON.stringify(category));
  }
  update(category: Category): Promise<z.infer<typeof CategorySchema>> {
    return http.put(this.baseUrl, new Headers(), JSON.stringify(category));
  }
  delete(category: Category): Promise<void> {
    return http.delete(this.baseUrl, new Headers(), JSON.stringify(category));
  }
  deleteById(id: number): Promise<void> {
    return http.delete(this.baseUrl + "/" + id);
  }
}
