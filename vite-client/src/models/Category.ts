import { z } from "zod";
import { Product, ProductsSchema } from "./Product";

export interface Category {
  categoryid: number;
  products: Product[];
  categoryName: string;
  subcategories: Category[];
}

export const CategorySchema: z.ZodType = z.object({
  categoryid: z.number(),
  products: ProductsSchema,
  categoryName: z.string(),
  subcategories: z.lazy(() => z.array(CategorySchema)),
});

export const CategoriesSchema = z.array(CategorySchema);
