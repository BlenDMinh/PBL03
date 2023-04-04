import { ProductModel } from '@/models/ProductModel';
import baseUrl from 'next/config'
import { IProductService } from '../IProductService';

export class ProductService implements IProductService {
    readonly baseUrl = baseUrl + 'product/';
    async getById(id: Number): Promise<ProductModel> {
        throw new Error('Method not implemented.');
    }
    async getByCategory(categoryId: Number): Promise<ProductModel[]> {
        throw new Error('Method not implemented.');
    }
}