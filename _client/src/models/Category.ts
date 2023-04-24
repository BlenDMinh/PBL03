import { Product } from "./Product";

export interface Category {
  categoryid: Number;
  categoryName: String;
  subcategories: Category[];
  products: Product[];
}
