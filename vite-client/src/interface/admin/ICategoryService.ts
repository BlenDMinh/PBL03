import { z } from "zod";
import {
  CategoriesSchema,
  Category,
  CategorySchema,
} from "../../models/Category";

export interface ICategoryService {
  getAll(): Promise<z.infer<typeof CategoriesSchema>>;
  getById(id: number): Promise<z.infer<typeof CategorySchema>>;
  insert(category: Category): Promise<z.infer<typeof CategorySchema>>;
  update(category: Category): Promise<z.infer<typeof CategorySchema>>;
  delete(category: Category): Promise<void>;
  deleteById(id: number): Promise<void>;
}
