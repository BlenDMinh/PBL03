import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AddressType } from "../models/AddressType";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { Status } from "../models/Status";
import { CustomerService } from "../services/CustomerService";
import { OrderService } from "../services/OrderService";
import { ProductService } from "../services/ProductService";

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

        <div className="w-[80vw] mx-auto flex items-center gap-x-8">
          <div className="bg-white w-1/6 rounded-md shadow-md flex flex-col py-4 gap-y-2 h-fit">
            <button
              className="p-4 hover:bg-gray-50"
              onClick={() => navigate("/cart")}
            >
              Giỏ hàng
            </button>
            <button
              className="p-4 hover:bg-gray-50"
              onClick={() => navigate("/order")}
            >
              Đơn hàng
            </button>
          </div>

          <div className="text-lg font-semibold tracking-wider w-full flex items-center justify-center rounded-md shadow-md bg-white h-[50vh]">
            <span>Không có sản phẩm trong giỏ hàng của bạn</span>
          </div>
        </div>

        <Footer />
      </main>
    );

  return (
    <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
      <Navbar />
      <div className="w-[80vw] mx-auto min-h-[41vh] flex items-center justify-center">
        <div className="w-full flex gap-x-6">
          <div className="bg-white w-1/6 rounded-md shadow-md flex flex-col py-4 gap-y-2 h-fit">
            <button
              className="p-4 hover:bg-gray-50"
              onClick={() => navigate("/cart")}
            >
              Giỏ hàng
            </button>
            <button
              className="p-4 hover:bg-gray-50"
              onClick={() => navigate("/order")}
            >
              Đơn hàng
            </button>
          </div>

          <div className="bg-white w-full rounded-md shadow-md flex flex-col gap-y-4 text-gray-900 text-sm p-4">
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
                    {(val.product.listedPrice * val.quantity).toLocaleString()}{" "}
                    ₫
                  </span>

                  <button
                    title="Xoá sản phẩm này"
                    onClick={async (event) => {
                      event.preventDefault;

                      const customerService = CustomerService.getInstance();

                      if (customerService.loggedInCustomer) {
                        const delSku = val.product.sku;
                        customerService.loggedInCustomer.cartProducts =
                          customerService.loggedInCustomer.cartProducts.filter(
                            (e) => e.sku != delSku
                          );

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
            <div className="flex justify-between">
              <button
                onClick={handleDeleteCart}
                title="Xoá toàn bộ giỏ hàng"
                className="text-sm underline hover:text-winmart w-fit mx-1 p-1"
              >
                Xoá toàn bộ giỏ hàng
              </button>
              <button
                title="Đặt hàng"
                className="w-60 p-2 bg-winmart border border-winmart rounded-lg shadow-md text-white hover:text-winmart hover:bg-white"
                onClick={() => {
                  const orderService = OrderService.getInstance();
                  const customerService = CustomerService.getInstance();
                  var order: Order = {
                    orderId: -1,
                    status: Status.INCOMPLETE,
                    address: customerService.loggedInCustomer?.addresses.find(
                      (e) => e.addressType == AddressType.DEFAULT
                    ),
                    dateCreated: new Date(Date.now()),
                    dateCompleted: undefined,
                    products: customerService.loggedInCustomer?.cartProducts,
                  };
                  orderService.insert(order).then((e) => {
                    if (customerService.loggedInCustomer?.orders == undefined)
                      customerService.loggedInCustomer!.orders = [];
                    customerService.loggedInCustomer!.orders.push(e);
                    customerService.loggedInCustomer!.cartProducts = [];
                    customerService.update().then(() => {
                      navigate("/order");
                    });
                  });
                }}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Cart;
