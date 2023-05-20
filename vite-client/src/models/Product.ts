import { z } from "zod";

export interface Product {
  sku: number;
  productName: string | null | undefined;
  listedPrice: number;
  origin: string | null | undefined;
  brand: string | null | undefined;
  ingridients: string | null | undefined;
  userManual: string | null | undefined;
  preservedManual: string | null | undefined;
  description: string | null | undefined;
  quantity: number;
}

export const ProductSchema = z.object({
  sku: z.number(),
  productName: z.string().nullish(),
  listedPrice: z.number(),
  origin: z.string().nullish(),
  brand: z.string().nullish(),
  ingridients: z.string().nullish(),
  userManual: z.string().nullish(),
  preservedManual: z.string().nullish(),
  description: z.string().nullish(),
  quantity: z.number(),
});

export const ProductsSchema = z.array(ProductSchema);
