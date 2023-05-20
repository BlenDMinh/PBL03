import { ShoppingCart } from "lucide-react";

function Cartbar() {
  return (
    <a
      href="/cart"
      className="text-white flex items-center gap-x-2 p-2 cursor-pointer"
    >
      <span>
        <ShoppingCart />
      </span>
      <span>Giỏ hàng</span>
    </a>
  );
}

export default Cartbar;
