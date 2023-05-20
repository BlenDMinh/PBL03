/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductBox from "../components/product/ProductBox";
import { Category } from "../models/Category";
import { Product, ProductsSchema } from "../models/Product";
import { CategoryService } from "../services/CategoryService";
import { ProductService } from "../services/ProductService";

function CategoryProduct() {
  const { id } = useParams();

  if (id == undefined) return null;

  const catId = id == undefined ? 0 : Number.parseInt(id);

  const [products, setProducts] = useState<z.infer<typeof ProductsSchema>>([]);

  const getProducts = useCallback(async function (
    categoryId: number,
    maxNum: number
  ): Promise<Product[]> {
    const productService = ProductService.getInstance();
    const categoryService = CategoryService.getInstance();
    let products: Product[] = [];
    const category = (await categoryService.getById(categoryId)) as Category;
    if (category.subcategories != undefined) {
      for (let i = 0; i < category.subcategories.length; i++) {
        const c = category.subcategories[i];
        if (maxNum == 0) break;
        const retProducts = await getProducts(c.categoryId, maxNum);
        maxNum -= retProducts.length;
        retProducts.forEach((e) => products.push(e));
      }
    } else {
      products = (await productService.getByCategory(
        categoryId,
        0,
        maxNum
      )) as Product[];
      maxNum -= products.length;
    }
    return products;
  },
  []);

  const [category, setCategory] = useState<Category>();
  const [selectedOptions, setSelectedOptions] = useState<string>("");

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOptions(value);
    console.log(value);
  };

  useEffect(() => {
    const categoryService = CategoryService.getInstance();
    categoryService.getById(catId).then((data) => {
      setCategory(data);
    });

    getProducts(catId, 500).then((p) => {
      if (selectedOptions === "skuA" || selectedOptions === "")
        setProducts(p.sort((a, b) => a.sku - b.sku));
      else if (selectedOptions === "skuD")
        setProducts(p.sort((a, b) => b.sku - a.sku));
      else if (selectedOptions === "priceA")
        setProducts(p.sort((a, b) => a.listedPrice - b.listedPrice));
      else if (selectedOptions === "priceD")
        setProducts(p.sort((a, b) => b.listedPrice - a.listedPrice));
    });
  }, [catId, getProducts, selectedOptions]);

  return (
    <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
      <Navbar />
      <div className="w-[80vw] mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">
            {category?.categoryName}
          </span>

          <div>
            <select
              name="sortRule"
              id="sortRule"
              onChange={selectChange}
              value={selectedOptions}
              className="outline-none text-sm text-gray-900"
            >
              <option value="priceA">Xếp theo giá tăng dần</option>
              <option value="priceD">Xếp theo giá giảm dần</option>
              <option value="skuA">Xếp theo sản phẩm lâu nhất</option>
              <option value="skuD">Xếp theo sản phẩm mới nhất</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6 mt-4">
          {products.map((v, i) => (
            <div key={i}>
              <ProductBox product={v as Product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default CategoryProduct;
