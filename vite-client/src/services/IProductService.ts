import { z } from "zod";
import { ProductSchema, ProductsSchema } from "../models/Product";

export interface IProductService {
  getAll(
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>>;
  // getAll(pageNum: Number, pageSize: Number): Promise<Product[]>;
  getById(id: number): Promise<z.infer<typeof ProductSchema>>;
  getByCategory(
    categoryId: number,
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>>;
  getProductImagePath(id: number): string;
}
