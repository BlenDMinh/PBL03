import { ProductModel } from '@/models/ProductModel';
import { IProductService } from '../IProductService';
import { http } from '../utils/http';

export class ProductService implements IProductService {
    readonly baseUrl = process.env.apiUrl + '/api/product';
    getProductImagePath(id: Number): string {
       return this.baseUrl + `/image/${id}`;
    }

    getAll(pageNum: Number, pageSize: Number): Promise<ProductModel> {
        return http.get<ProductModel>(this.baseUrl + `?pageNum=${pageNum}&pageSize=${pageSize}`);
    }
    getById(id: Number): Promise<ProductModel> {
        return http.get<ProductModel>(this.baseUrl + `/${id}`);
    }
    getByCategory(categoryId: Number, pageNum: Number, pageSize: Number): Promise<ProductModel[]> {
        return http.get<ProductModel[]>(this.baseUrl + `?category=${categoryId}&pageNum=${pageNum}&pageSize=${pageSize}`);
    }
}