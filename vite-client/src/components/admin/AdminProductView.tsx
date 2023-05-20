import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";

interface AdminProductViewProp {
  product: Product | undefined;
  onSubmit: (product: Product | undefined) => void;
}

function AdminProductView(props: AdminProductViewProp) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  useEffect(() => {
    if (props.product == undefined) return;
    setProduct(props.product);
  }, [props.product]);
  if (product == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(product);
        }}
        className="mx-16 my-16 ml-96 bg-white w-2/3 h-5/6 rounded-xl p-10 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-10 text-lg font-bold">
          <div className="flex justify-between">
            <div></div>
            <button
              type="submit"
              className="hover:bg-white hover:text-slate-700 shadow rounded justify-center items-center flex w-12 h-12 bg-red-500 text-white"
              onClick={() => setProduct(undefined)}
            >
              <X />
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-slate-500 font-normal w-44">
              SKU:
            </span>
            <input
              type="text"
              name="sku"
              id="sku"
              value={product?.sku}
              onChange={(event) => {
                const updatedProduct = { ...product };
                let sku: number = Number.parseInt(event.target.value);
                if (Number.isNaN(sku)) sku = 0;
                console.log(sku);
                updatedProduct.sku = sku;
                setProduct(updatedProduct);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Tên Sản Phẩm:</span>
            <input
              type="text"
              name="productName"
              id="productName"
              value={product?.productName}
              onChange={(event) => {
                const updatedProduct = { ...product };
                updatedProduct.productName = event.target.value;
                setProduct(updatedProduct);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Thương hiệu</span>
            <input
              type="text"
              name="brand"
              id="brand"
              value={product?.brand}
              onChange={(event) => {
                const updatedProduct = { ...product };
                updatedProduct.brand = event.target.value;
                setProduct(updatedProduct);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Giá</span>
            <input
              type="text"
              name="listedPrice"
              id="listedPrice"
              value={product?.listedPrice}
              onChange={(event) => {
                const updatedProduct = { ...product };
                updatedProduct.listedPrice = event.target.value;
                setProduct(updatedProduct);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Số lượng</span>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={product?.quantity}
              onChange={(event) => {
                const updatedProduct = { ...product };
                updatedProduct.quantity = event.target.value;
                setProduct(updatedProduct);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 z-50 border flex self-center justify-center items-center gap-5 px-4 py-5 rounded-md text-xl hover:text-slate-500 hover:bg-inherit font-bold bg-winmart text-white w-40 h-16"
          onClick={() => {
            props.onSubmit(product);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminProductView;
