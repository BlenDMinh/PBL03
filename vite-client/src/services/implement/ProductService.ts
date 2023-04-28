import { http } from "../utils/http";
import { ProductSchema, ProductsSchema } from "../../models/Product";
import { IProductService } from "../IProductService";
// import dotenv from 'dotenv'
import { z } from "zod";

// dotenv.config();
export class ProductService implements IProductService {
  readonly baseUrl = import.meta.env.VITE_API_URL + "/api/product";
  getProductImagePath(id: Number): string {
    return this.baseUrl + `/image/${id}`;
  }

  getAll(pageNum: number, pageSize: number): Promise<z.infer<typeof ProductsSchema>> {
    return http.get(
      this.baseUrl + `?pageNum=${pageNum}&pageSize=${pageSize}`
    ).then((data) => ProductsSchema.parse(data));
  }
  getById(id: Number): Promise<z.infer<typeof ProductSchema>> {
    return http.get(this.baseUrl + `/${id}`).then((data) => ProductSchema.parse(data));
  }
  getByCategory(
    categoryId: Number,
    pageNum: Number,
    pageSize: Number
  ): Promise<z.infer<typeof ProductsSchema>> {
    return http.get(
      this.baseUrl +
        `?category=${categoryId}&pageNum=${pageNum}&pageSize=${pageSize}`
    ).then((data) => ProductsSchema.parse(data));
  }
}
