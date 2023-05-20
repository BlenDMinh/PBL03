import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/ProductService";
import ProductInfo from "./ProductInfo";

interface ProductBoxProps {
  product: Product;
}

function ProductBox(props: ProductBoxProps) {
  const [imgURL, setImgURL] = useState<string>("");
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  useEffect(() => {
    try {
      const productService = ProductService.getInstance();
      const url = productService.getProductImagePath(props.product.sku);
      setImgURL(url);
    } catch (error) {
      console.error(error);
    }
  }, [props.product.sku]);

  const showProductInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setProductInfo(props.product);
  };

  return (
    <div>
      {productInfo ? (
        <div>
          <button
            onClick={() => setProductInfo(null)}
            className="fixed top-0 z-50 right-0 p-4 bg-white text-black hover:text-white hover:bg-winmart"
          >
            <X />
          </button>

          <ProductInfo product={productInfo} />
        </div>
      ) : null}

      <button
        onClick={showProductInfo}
        className="flex flex-col p-4 items-center justify-center bg-white text-gray-900 w-full shadow-md rounded-md hover:shadow-lg"
        title={
          props.product.productName
            ? props.product.productName
            : "Chi tiết sản phẩm"
        }
      >
        <div className="flex flex-col items-center w-full">
          <img
            src={imgURL}
            alt={`Ảnh ${props.product.productName}`}
            title={`Ảnh ${props.product.productName}`}
            className="rounded-md w-auto h-32 mb-2"
          />

          <span className="w-full text-left tracking-tight h-5 overflow-hidden">
            {props.product.productName}
          </span>

          <span className="w-full h-4 text-left text-winmart">
            {props.product.listedPrice.toLocaleString()} ₫
          </span>
        </div>
      </button>
    </div>
  );
}

export default ProductBox;
