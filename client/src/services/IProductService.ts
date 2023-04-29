import { Product } from "@/models/Product";

export interface IProductService {
  getAll(pageNum: Number, pageSize: Number): Promise<Product[]>;
  getById(id: Number): Promise<Product>;
  getByCategory(
    categoryId: Number,
    pageNum: Number,
    pageSize: Number
  ): Promise<Product[]>;
  getProductImagePath(id: Number): string;
}
