import { CategoryModel } from "@/models/CategoryModel";
import { ICategoryService } from "../ICategoryService";

export class CategoryService implements ICategoryService {
    readonly baseUrl = process.env.apiUrl + '/api/category';
    getAll(): Promise<CategoryModel[]> {
        return new Promise<CategoryModel[]>(async (onResolve, onError) => {
            try {
                fetch(this.baseUrl, {
                    credentials: 'include',
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        // 'Access-Control-Allow-Origin': 'http://localhost:8080'
                    }
                }).then(r => {
                    console.log(r.status)
                    if(!r.ok)
                        throw new Error(`Error! status: ${r.status}`);
                    return r.json();
                }).then(e => onResolve(e as CategoryModel[]));
            } catch(e) {
                onError(e);
            }
        });
    }
    getById(id: Number): Promise<CategoryModel> {
        throw new Error("Method not implemented.");
    }
}