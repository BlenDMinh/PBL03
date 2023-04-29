import { http } from "../utils/http";
import { CategoriesSchema, CategorySchema } from "../../models/Category";
import { ICategoryService } from "../ICategoryService";
import "reflect-metadata";
import dotenv from 'dotenv'
import { z } from "zod";

dotenv.config();
export class CategoryService implements ICategoryService {
  readonly baseUrl = import.meta.env.VITE_API_URL + "/api/category";
  getAll(): Promise<z.infer<typeof CategoriesSchema>> {
    return http.get(this.baseUrl).then((data) => CategoriesSchema.parse(data));
  }
  getById(id: Number): Promise<z.infer<typeof CategorySchema>> {
    return http.get(this.baseUrl + `/${id}`).then((data) => CategorySchema.parse(data));
  }
}
