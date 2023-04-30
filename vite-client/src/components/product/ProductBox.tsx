import { PackagePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/implement/ProductService";
import ProductInfo from "./ProductInfo";

interface ProductBoxProps {
  product: Product;
}

const productService = new ProductService();

function ProductBox(props: ProductBoxProps) {
  const [imgURL, setImgURL] = useState<string>("");
  useEffect(() => {
    const url = productService.getProductImagePath(props.product.sku);
    setImgURL(url);
  }, [props.product.sku]);

  const [_product, set_Product] = useState<Product | null>(null);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    set_Product(props.product);
  };

  return (
    <div>
      {_product ? <ProductInfo product={_product} /> : null}

      {_product ? (
        <button
          onClick={() => set_Product(null)}
          className="fixed top-0 right-0 z-50 p-4 hover:bg-winmart"
        >
          <span>
            <X />
          </span>
        </button>
      ) : null}

      <button
        onClick={buttonHandler}
        className="flex flex-col items-center gap-y-2 justify-center p-3 border border-gray-300 rounded-lg hover:shadow-md bg-white text-gray-900 w-full text-sm hover:bg-gray-50 shadow-sm"
        title={props.product.productName}
      >
        <a href="/" className="flex flex-col items-center w-full">
          <img
            src={imgURL}
            alt={`Ảnh sản phẩm ${props.product.productName}`}
            title={`Ảnh sản phẩm ${props.product.productName}`}
            className="rounded-md h-40 mb-2"
          />

          <span className="w-full text-left break-words font-light h-5 overflow-hidden">
            {props.product.productName}
          </span>

          <span className="w-full h-4 text-left text-winmart">
            {props.product.listedPrice.toLocaleString()} ₫
          </span>
        </a>

        <button className="flex items-center justify-center text-sm px-4 py-1.5 border border-winmart rounded-lg hover:bg-winmart hover:text-white font-light text-gray-900 bg-white">
          <span className="mr-1">
            <PackagePlus size={15} />
          </span>
          <span>Thêm vào giỏ</span>
        </button>
      </button>
    </div>
  );
}

export default ProductBox;
