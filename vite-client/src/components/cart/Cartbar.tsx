import { ShoppingCart } from "lucide-react";
import { useState } from "react";

function Cartbar() {
  const [cart, setCart] = useState<number | undefined>(0);
  const [reload, setReload] = useState<boolean>(false);

  // useEffect(() => {
  //   setReload(!reload);
  //   const customerService = CustomerService.getInstance();
  //   setCart(customerService.loggedInCustomer?.cartProducts.length);
  // }, [reload]);

  return (
    <a
      href="/cart"
      className="text-white flex items-center gap-x-2 p-2 cursor-pointer"
    >
      <span>
        <ShoppingCart />
      </span>
      <span>Giỏ hàng ({cart ? cart : 0})</span>
    </a>
  );
}

export default Cartbar;
