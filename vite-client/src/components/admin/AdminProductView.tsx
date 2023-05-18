import { Product } from "../../models/Product";
import { useEffect, useState } from "react";

interface AdminProductViewProp {
  product: Product | undefined;
  onSubmit: (product: Product | undefined) => void;
}

function AdminProductView(props: AdminProductViewProp){
  const [product, setProduct] = useState<Product | undefined>(undefined);
  useEffect(() => {
    if (props.product == undefined) return;
    setProduct(props.product)
  }, [props.product]);
  if (product == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(product);
        }}
        className="mx-16 my-16 ml-32 bg-white w-auto h-5/6 rounded-xl p-10"
      >
        <label htmlFor="sku">SKU: </label>
        <input
          type="text"
          name="sku"
          id="sku"
          value={product.sku}
          onChange={(event) => {
          }}
          required
        /><br />
        <label htmlFor="productName">Tên Sản Phẩm: </label>
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
        required
        /><br />
        <label htmlFor="brand">Thương hiệu: </label>
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
        required
        /><br />
        <label htmlFor="listedPrice">Giá: </label>
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
        required
        /><br />
         <label htmlFor="quantity">Số lượng: </label>
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
        required
        /><br />
         <button
            className=
              "z-50 border flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-25 mt-4 h-10 m-2"
            onClick={() => {props.onSubmit(product)}}
          >
            Submit
          </button>
      </form>
    </div>
  );
}

export default AdminProductView;
