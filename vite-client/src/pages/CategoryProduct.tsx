import { useEffect, useState } from "react";
import { ProductService } from "../services/implement/ProductService";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Product, ProductsSchema } from "../models/Product";
import ProductBox from "../components/product/ProductBox";
import { CategoryService } from "../services/implement/CategoryService";
import { z } from "zod";
import { Category } from "../models/Category";

function CategoryProduct() {
    let { id } = useParams();

    if(id == undefined)
        return null;

    var catId = id == undefined ? 0 : Number.parseInt(id);

    const productService = ProductService.getInstance();
    const categoryService = CategoryService.getInstance();
    const [products, setProducts] = useState<z.infer<typeof ProductsSchema>>([]);

    const getProducts = async function(categoryId: number, maxNum: number): Promise<Product[]> {
        let products: Product[] = [];
        let category = await categoryService.getById(categoryId) as Category;
        if(category.subcategories != undefined) {
            for(let i = 0; i < category.subcategories.length; i++) {
                let c = category.subcategories[i];
                if(maxNum == 0)
                    break;
                let retProducts = await getProducts(c.categoryId, maxNum);
                maxNum -= retProducts.length;
                retProducts.forEach(e => products.push(e));
            }
        }
        else {
            products = await productService.getByCategory(categoryId, 0, maxNum) as Product[];
            maxNum -= products.length;
        }
        return products;
    }

    useEffect(() => {
        getProducts(catId, 20).then(p => setProducts(p));
    }, []);
    return (
        <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
      <Navbar />
      <div className="grid grid-cols-5 gap-4">
        {products.map((v, i) => (
            <div key={i}>
              <ProductBox product={v as Product} />
            </div>
          ))}
      </div>
      <Footer />
    </main>
    );
}

export default CategoryProduct;