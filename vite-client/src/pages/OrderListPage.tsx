import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Order } from "../models/Order";
import { Product } from "../models/Product";
import { CustomerService } from "../services/CustomerService";
import { ProductService } from "../services/ProductService";

interface OptimizeProduct {
  product: Product;
  imgUrl: string;
  quantity: number;
}

function OrderListPage() {
  const navigate = useNavigate();

  const [customerOrders, setCustomerOrders] = useState<Order[]>([]);

  useEffect(() => {
    document.title = "Đơn hàng | Winmart";
    try {
      const customerService = CustomerService.getInstance();
      customerService.login().then(() => {
        const orders = customerService.loggedInCustomer?.orders;
        console.log(orders);
        setCustomerOrders(orders ? orders : []);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!customerOrders || customerOrders.length === 0)
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
            <span>Không có đơn hàng nào</span>
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
              <span className="font-semibold">Đơn hàng của bạn</span>
            </div>
            {customerOrders.map((val, id) => {
              const productService = ProductService.getInstance();
              const hadChecked = new Array(val.products?.length).fill(false);
              const arr: OptimizeProduct[] = [];
              let sumPrice = 0;

              for (let i = 0; val.products && i < val.products.length; i++) {
                let cnt = 1;
                sumPrice += val.products[i].listedPrice;

                for (let j = i + 1; j < val.products.length; j++)
                  if (
                    !hadChecked[j] &&
                    val.products[i].sku === val.products[j].sku
                  ) {
                    hadChecked[j] = true;
                    cnt++;
                  }

                if (!hadChecked[i])
                  arr.push({
                    product: val.products[i],
                    imgUrl: productService.getProductImagePath(
                      val.products[i].sku
                    ),
                    quantity: cnt,
                  });
              }

              return (
                <div
                  key={id}
                  className="items-center justify-between px-4 py-2 border-b border-gray-100 rounded-md last:border-none hover:shadow-md flex flex-col"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="gap-x-10 flex items-center">
                      <span>Mã đơn hàng: {val.orderId}</span>
                      <span className="text-gray-500">
                        Tình trạng:{" "}
                        {val.status == "INCOMPLETE"
                          ? "Đang giao hàng"
                          : "Hoàn thành"}
                      </span>
                    </div>
                    <span className="text-sm">
                      Tổng đơn hàng:
                      <span className="text-winmart ml-2 text-lg">
                        {sumPrice.toLocaleString()} ₫
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-2 w-full">
                    {arr.map((val, id) => {
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
                            {(
                              val.product.listedPrice * val.quantity
                            ).toLocaleString()}{" "}
                            ₫
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default OrderListPage;
