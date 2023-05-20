import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ProductService } from "../services/ProductService";
import ProductInfo from "./product/ProductInfo";

function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [_product, set_Product] = useState<Product | null>(null);
  const [suggestProduct, setSuggestProduct] = useState<Product[]>([]);

  useEffect(() => {
    const productService = ProductService.getInstance();
    productService
      .getAll(0, 1000)
      .then((data) =>
        setAllProduct((data as Product[]).sort((a, b) => b.sku - a.sku))
      );
  }, []);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuggestProduct([]);
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue === "") return;

    const arr: Product[] = [];
    for (let i = 0; i < allProduct.length; i++) {
      if (allProduct[i].productName?.includes(inputValue))
        arr.push(allProduct[i]);
      if (arr.length === 4) break;
    }

    setSuggestProduct(arr);
  }, [allProduct, inputValue]);

  return (
    <form className="flex items-center border-l border-gray-300">
      <input
        type="text"
        name="search"
        id="search"
        title="Tìm kiếm"
        onChange={inputOnChange}
        placeholder="Tìm sản phẩm, thương hiệu, ..."
        className="bg-gray-50 outline-none px-3 py-2 w-72 relative"
      />
      <button
        type="submit"
        title="Xác nhận tìm kiếm"
        className="p-2 bg-gray-100 hover:bg-gray-200"
      >
        <Search />
      </button>

      {_product ? <ProductInfo product={_product} /> : null}

      {_product ? (
        <button
          onClick={() => set_Product(null)}
          className="fixed top-0 right-0 z-50 p-4 hover:bg-winmart"
        >
          <span className="text-white">
            <X />
          </span>
        </button>
      ) : null}

      {suggestProduct && suggestProduct.length > 0 ? (
        <div className="absolute bg-white flex flex-col justify-center rounded-md shadow-md gap-y-2 py-2 top-[4.4rem] w-80 text-sm text-gray-900">
          {suggestProduct.map((val, id) => {
            return (
              <button
                key={id}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  set_Product(val);
                }}
                className="h-1/4 hover:bg-gray-100 flex items-center p-2 cursor-pointer w-full overflow-hidden"
              >
                <span className="text-left">{val.productName}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </form>
  );
}

export default Searchbar;
