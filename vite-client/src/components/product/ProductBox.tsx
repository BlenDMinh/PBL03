import { PackagePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/implement/ProductService";

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

  return (
    <div
      className="flex flex-col items-center gap-y-2 justify-center p-4 border border-gray-400 rounded-lg hover:shadow-md bg-white"
      title={props.product.productName}
    >
      <a href="/" className="flex flex-col items-center gap-y-1">
        <img
          src={imgURL}
          alt={`Ảnh sản phẩm ${props.product.productName}`}
          title={`Ảnh sản phẩm ${props.product.productName}`}
          className="rounded-lg w-full h-auto"
        />

        <span className="w-full text-left break-words font-light h-6 overflow-hidden">
          {props.product.productName}
        </span>

        <span className="w-full h-4 text-sm text-left text-winmart">
          {props.product.listedPrice.toLocaleString()} ₫
        </span>
      </a>

      <button className="flex items-center justify-center text-sm px-4 py-1.5 border border-winmart rounded-lg hover:bg-winmart hover:text-white font-light text-gray-900">
        <span className="mr-1">
          <PackagePlus size={15} />
        </span>
        <span>Thêm vào giỏ</span>
      </button>
    </div>
  );
}

export default ProductBox;
