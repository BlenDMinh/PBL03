import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Product } from "../models/Product";
import { CustomerService } from "../services/implement/CustomerService";
import { ProductService } from "../services/implement/ProductService";

interface optimizedCart {
  product: Product;
  imgUrl: string;
  quantity: number;
}

function Cart() {
  const navigate = useNavigate();

  const [customerProduct, setCustomerProduct] = useState<optimizedCart[]>([]);
  const [sumPrice, setSumPrice] = useState<number>(0);

  useEffect(() => {
    document.title = "Giỏ hàng | Winmart";
    try {
      const customerService = CustomerService.getInstance();
      customerService.login().then(() => {
        const productService = ProductService.getInstance();
        const cartProducts = customerService.loggedInCustomer?.cartProducts;

        const hadChecked = new Array(cartProducts?.length).fill(false);
        const arr: optimizedCart[] = [];
        let sum = 0;

        for (let i = 0; cartProducts && i < cartProducts.length; i++) {
          let cnt = 1;
          sum += cartProducts[i].listedPrice;

          for (let j = i + 1; j < cartProducts.length; j++)
            if (!hadChecked[j] && cartProducts[i].sku === cartProducts[j].sku) {
              hadChecked[j] = true;
              cnt++;
            }

          if (!hadChecked[i])
            arr.push({
              product: cartProducts[i],
              imgUrl: productService.getProductImagePath(cartProducts[i].sku),
              quantity: cnt,
            });
        }

        setCustomerProduct(arr);
        setSumPrice(sum);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDeleteCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;

    const customerService = CustomerService.getInstance();
    while (
      customerService.loggedInCustomer &&
      customerService.loggedInCustomer.cartProducts.length
    ) {
      customerService.loggedInCustomer.cartProducts.pop();
    }
    if (customerService.loggedInCustomer) customerService.update();

    navigate(0);
  };

  if (!customerProduct || customerProduct.length === 0)
    return (
      <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
        <Navbar />
        <div className="w-[80vw] mx-auto bg-white rounded-md shadow-md flex items-center justify-center h-[50vh]">
          <span className="text-lg font-semibold tracking-wider">
            Không có sản phẩm trong giỏ hàng của bạn
          </span>
        </div>
        <Footer />
      </main>
    );

  return (
    <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
      <Navbar />
      <div className="w-[80vw] mx-auto min-h-[45vh] flex items-center justify-center">
        <div className="bg-white rounded-md shadow-md w-full flex flex-col gap-y-4 text-gray-900 text-sm p-4">
          <div className="flex justify-between items-center m-4 text-lg">
            <span className="font-semibold">Giỏ hàng hiện tại</span>
            <span className="text-sm">
              Tổng đơn hàng:
              <span className="text-winmart ml-2 text-lg">
                {sumPrice.toLocaleString()} ₫
              </span>
            </span>
          </div>
          {customerProduct.map((val, id) => {
            return (
              <div
                key={id}
                className="flex items-center justify-between px-4 py-2 border-b border-gray-100 rounded-md last:border-none hover:shadow-md"
              >
                <img
                  src={val.imgUrl}
                  alt={`Ảnh sản phẩm ${val.product.sku}`}
                  title={`Ảnh sản phẩm ${val.product.sku}`}
                  className="w-auto h-24 rounded-md mx-2"
                />

                <div className="flex flex-col gap-y-2 w-1/2">
                  <span>{val.product.productName}</span>
                  <span className="text-gray-500">
                    Số lượng: {val.quantity}
                  </span>
                </div>

                <span className="text-base text-winmart">
                  {(val.product.listedPrice * val.quantity).toLocaleString()} ₫
                </span>

                <button
                  title="Xoá sản phẩm này"
                  onClick={async (event) => {
                    event.preventDefault;

                    const customerService = CustomerService.getInstance();
                    
                    if (customerService.loggedInCustomer) {
                      let delSku = val.product.sku;
                      customerService.loggedInCustomer.cartProducts = customerService.loggedInCustomer.cartProducts.filter(e => e.sku != delSku);

                      await customerService.update();
                    }

                    navigate(0);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X />
                </button>
              </div>
            );
          })}
          <button
            onClick={handleDeleteCart}
            title="Xoá toàn bộ giỏ hàng"
            className="text-base hover:underline hover:text-winmart w-fit mx-1 p-1"
          >
            Xoá toàn bộ giỏ hàng
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Cart;