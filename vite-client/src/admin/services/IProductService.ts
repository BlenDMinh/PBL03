import { z } from "zod";
import { Product, ProductSchema, ProductsSchema } from "../../models/Product";

export interface IProductService {
  getAll(
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>>;

  getById(id: number): Promise<z.infer<typeof ProductSchema>>;

  getByCategory(
    categoryId: number,
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>>;

  insert(order: Product): Promise<z.infer<typeof ProductSchema>>;
  update(order: Product): Promise<z.infer<typeof ProductSchema>>;
  delete(order: Product): Promise<void>;
  deleteById(id: number): Promise<void>;

  getProductImagePath(id: number): string;
}
