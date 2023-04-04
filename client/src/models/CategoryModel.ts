import { ProductModel } from "./ProductModel";

export interface CategoryModel {
    categoryid: Number;
    categoryName: String;
    subcategories: CategoryModel[]
    products: ProductModel[]
}