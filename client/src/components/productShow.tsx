import { BsCartPlus } from "react-icons/bs";
import { ProductModel } from "@/models/ProductModel";

export default function ProductShow(product: ProductModel) {
  return (
    <button className="flex px-4 py-2 items-center shadow-md rounded-md border-2 border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white">
      <BsCartPlus />
      <p className="ml-1 text-sm">Thêm vào giỏ</p>
    </button>
  );
}
