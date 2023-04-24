import { Category } from "@/models/Category";

export interface ICategoryService {
  getAll(): Promise<Category[]>;
  getById(id: Number): Promise<Category>;
}
