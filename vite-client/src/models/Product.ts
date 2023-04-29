import { z } from "zod";

export interface Product {
  sku: number;
  productName: string;
  listedPrice: number;
  origin: string;
  brand: string;
  ingridients: string;
  userManual: string;
  preservedManual: string;
  description: string;
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
});

export const ProductsSchema = z.array(ProductSchema);
