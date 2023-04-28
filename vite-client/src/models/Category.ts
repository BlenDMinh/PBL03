import { Product } from "./Product";

export interface Category {
  categoryid: Number;
  products: Product[];
  categoryName: String;
  subcategories: Category[];
}
