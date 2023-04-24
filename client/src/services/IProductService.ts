import { ProductModel } from "@/models/ProductModel";

export interface IProductService {
    getAll(pageNum: Number, pageSize: Number): Promise<ProductModel>;
    getById(id: Number): Promise<ProductModel>;
    getByCategory(categoryId: Number, pageNum: Number, pageSize: Number): Promise<ProductModel[]>;
    getProductImagePath(id: Number): string;
}