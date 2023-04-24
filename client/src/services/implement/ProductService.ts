import { http } from "../utils/http";
import { Product } from "@/models/Product";
import { IProductService } from "../IProductService";

export class ProductService implements IProductService {
  readonly baseUrl = process.env.apiUrl + "/api/product";
  getProductImagePath(id: Number): string {
    return this.baseUrl + `/image/${id}`;
  }

  getAll(pageNum: Number, pageSize: Number): Promise<Product> {
    return http.get<Product>(
      this.baseUrl + `?pageNum=${pageNum}&pageSize=${pageSize}`
    );
  }
  getById(id: Number): Promise<Product> {
    return http.get<Product>(this.baseUrl + `/${id}`);
  }
  getByCategory(
    categoryId: Number,
    pageNum: Number,
    pageSize: Number
  ): Promise<Product[]> {
    return http.get<Product[]>(
      this.baseUrl +
        `?category=${categoryId}&pageNum=${pageNum}&pageSize=${pageSize}`
    );
  }
}
