import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Product } from "../models/Product";
import { CustomerService } from "../services/implement/CustomerService";
import { ProductService } from "../services/implement/ProductService";

function Cart() {
  return (
    <main className="bg-gray-100 w-[calc(100vw - 12px)] relative select-none font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <CartInfo />
      </div>
      <Footer />
    </main>
  );
}

function CartInfo() {
  interface productBill {
    product: Product;
    count: number;
  }

  const [cartProduct, setCartProduct] = useState<productBill[]>();

  useEffect(() => {
    const customerService = CustomerService.getInstance();
    customerService.login().then(() => {
      const data = customerService.loggedInCustomer?.cartProducts;
      const tmp: productBill[] = [];
      const checked: boolean[] = [];

      for (let i = 0; data && i < data.length; i++) checked.push(false);

      setCartProduct(tmp);
    });
  });

  return (
    <div className="flex gap-x-4">
      <div className="p-6 bg-white shadow-md rounded-lg w-2/3">
        {cartProduct
          ? cartProduct.map((val, id) => {
              return (
                <ProductLine
                  key={id}
                  product={val.product}
                  productNumber={val.count}
                />
              );
            })
          : null}
      </div>
      <Bill />
    </div>
  );
}

interface ProductLineProps {
  product: Product;
  productNumber: number;
  key: number;
}

function ProductLine(props: ProductLineProps) {
  const [imgURL, setImgURL] = useState<string>("");

  useEffect(() => {
    const productService = ProductService.getInstance();
    const url = productService.getProductImagePath(props.product.sku);
    setImgURL(url);
  }, [props.product.sku]);

  if (!props.product) return <></>;

  return (
    <div
      key={props.key}
      className="flex items-center justify-between text-gray-900 p-2 rounded-lg text-sm shadow-sm mb-4 hover:shadow-md hover:bg-slate-50 shadow-winmart hover:shadow-winmart"
    >
      <img
        src={imgURL}
        alt={`Ảnh ${props.product.productName}`}
        title={`Ảnh ${props.product.productName}`}
        className="w-auto h-28"
      />

      <div className="w-1/2 flex flex-col">
        <span className="mb-3 text-base">{props.product.productName}</span>
        <span>Số lượng: {props.productNumber}</span>
      </div>

      <span>{props.product.listedPrice.toLocaleString()} ₫</span>

      <button className="p-2 rounded-full hover:bg-slate-100">
        <X />
      </button>
    </div>
  );
}

function Bill() {
  return <div></div>;
}

export default Cart;
