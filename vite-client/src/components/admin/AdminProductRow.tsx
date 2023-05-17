import { Box, Edit2, X } from "lucide-react";
import { Product } from "../../models/Product";

interface ProductProp {
  product: Product;
}

function AdminProductRow(props: ProductProp) {
  return (
    <div className="z-10 h-20 items-center justify-between flex">
      <div className="flex flex-row gap-5">
        <span className="text-gray-400 text-sm">
          {"ID: " + props.product.sku}
        </span>
        <Box />
        <span>{props.product.productName}</span>
      </div>
      <div className="flex flex-row w-40 gap-5">
        <button className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-green-500 hover:text-white">
          <Edit2 />
        </button>
        <button className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-red-500 hover:text-white">
          <X />
        </button>
      </div>
    </div>
  );
}

export default AdminProductRow;
