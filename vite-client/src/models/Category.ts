import { z } from "zod";
import { Product, ProductsSchema } from "./Product";

export interface Category {
  categoryId: number;
  products: Product[];
  categoryName: string;
  subcategories: Category[];
}

export const CategorySchema: z.ZodType = z.object({
  categoryId: z.number().nullish(),
  products: ProductsSchema.nullish(),
  categoryName: z.string().nullish(),
  subcategories: z.lazy(() => z.array(CategorySchema).nullish()),
});

export const CategoriesSchema = z.array(CategorySchema);
