import { z } from "zod";
import { IProductService } from "../../interface/admin/IProductService";
import { Product, ProductSchema, ProductsSchema } from "../../models/Product";
import { http } from "../../utils/http";

export class ProductService implements IProductService {
  private static instance: ProductService;
  public static getInstance(): ProductService {
    if (!ProductService.instance)
      ProductService.instance = new ProductService();
    return ProductService.instance;
  }

  private constructor() {
    return;
  }

  readonly baseUrl = "http://localhost:8080/api/product";
  getProductImagePath(id: number): string {
    return this.baseUrl + `/image/${id}`;
  }

  async getAll(
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>> {
    const data = await http.get(
      this.baseUrl + `?pageNum=${pageNum}&pageSize=${pageSize}`
    );
    return ProductsSchema.parse(data);
  }

  async getById(id: number): Promise<z.infer<typeof ProductSchema>> {
    const data = await http.get(this.baseUrl + `/${id}`);
    return ProductSchema.parse(data);
  }

  async getByCategory(
    categoryId: number,
    pageNum: number,
    pageSize: number
  ): Promise<z.infer<typeof ProductsSchema>> {
    const data = await http.get(
      this.baseUrl +
        `?category=${categoryId}&pageNum=${pageNum}&pageSize=${pageSize}`
    );
    return ProductsSchema.parse(data);
  }

  insert(product: Product): Promise<z.infer<typeof ProductSchema>> {
    return http.post(this.baseUrl, new Headers(), JSON.stringify(product));
  }
  update(product: Product): Promise<z.infer<typeof ProductSchema>> {
    return http.put(this.baseUrl, new Headers(), JSON.stringify(product));
  }
  delete(product: Product): Promise<void> {
    return http.delete(this.baseUrl, new Headers(), JSON.stringify(product));
  }
  deleteById(id: number): Promise<void> {
    return http.delete(this.baseUrl + "/" + id);
  }
}
