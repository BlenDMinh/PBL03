import { ProductModel } from "@/models/ProductModel";

export interface IProductService {
    getById(id: Number): Promise<ProductModel>;
    getByCategory(categoryId: Number): Promise<ProductModel[]>;
}