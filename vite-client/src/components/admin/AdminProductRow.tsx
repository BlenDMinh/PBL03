import { Box, Edit2 } from "lucide-react";
import { Product } from "../../models/Product";
import DeletePopup from "./DeletePopup";

interface ProductProp {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

function AdminProductRow(props: ProductProp) {
  return (
    <div className="z-10 h-20 items-center justify-between flex">
      <div className="flex flex-row gap-5 w-4/5">
        <span className="text-gray-400 text-sm w-36">
          {"ID: " + props.product.sku}
        </span>
        <Box />
        <div className="flex items-center justify-between w-full">
          <span>{props.product.productName}</span>
          <span>{"SL: " + props.product.quantity.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex flex-row w-40 gap-5">
        <button
          className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-green-500 hover:text-white"
          onClick={() => props.onEdit()}
        >
          <Edit2 />
        </button>
        <DeletePopup
          onYes={() => {
            return;
          }}
          onNo={() => {
            return;
          }}
        />
      </div>
    </div>
  );
}

export default AdminProductRow;
