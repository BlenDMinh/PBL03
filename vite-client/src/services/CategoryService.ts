import "reflect-metadata";
import { z } from "zod";
import { ICategoryService } from "../interface/ICategoryService";
import { CategoriesSchema, CategorySchema } from "../models/Category";
import { http } from "../utils/http";

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
      .then((e) => CategorySchema.parse(e) as z.infer<typeof CategorySchema>);
  }
}
