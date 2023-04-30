import { z } from "zod";
import { CategoriesSchema, CategorySchema } from "../models/Category";

export interface ICategoryService {
  getAll(): Promise<z.infer<typeof CategoriesSchema>>;
  getById(id: number): Promise<z.infer<typeof CategorySchema>>;
}
