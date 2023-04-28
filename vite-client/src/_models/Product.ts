import { z } from "zod";

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