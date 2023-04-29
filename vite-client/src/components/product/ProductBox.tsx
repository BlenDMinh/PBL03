import { Product } from "../../models/Product";
import { PackagePlus } from "lucide-react";

interface ProductBoxProps {
  product: Product;
  imgURL: string;
}

function ProductBox(props: ProductBoxProps) {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center w-52 p-4 border border-gray-400 rounded-lg hover:shadow-xl">
      <a href="/" className="flex flex-col items-center">
        <img
          src={props.imgURL}
          alt={`Ảnh sản phẩm ${props.product.productName}`}
          title={`Ảnh sản phẩm ${props.product.productName}`}
          className="rounded-lg w-auto h-auto"
        />

        <span className="w-full text-left break-words font-light text-sm mt-2">
          {props.product.productName}
        </span>

        <span className="w-full text-left text-sm text-winmart mt-1">
          {props.product.listedPrice.toLocaleString()} ₫
        </span>
      </a>

      <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-light text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 ">
        <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 flex items-center">
          <span className="mr-2">
            <PackagePlus size={15} />
          </span>
          <span className="text-sm">Thêm vào giỏ</span>
        </span>
      </button>
    </div>
  );
}

export default ProductBox;
