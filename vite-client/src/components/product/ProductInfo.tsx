import { Minus, PackagePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/Product";
import { CustomerService } from "../../services/implement/CustomerService";
import { ProductService } from "../../services/implement/ProductService";

interface ProductInfoProps {
  product: Product;
}

function ProductInfo(props: ProductInfoProps) {
  const navigate = useNavigate();

  const [imgURL, setImgURL] = useState<string>("");
  const [productCount, setProductCount] = useState<number>(1);

  useEffect(() => {
    const service = ProductService.getInstance();
    const url = service.getProductImagePath(props.product.sku);
    setImgURL(url);

    const customerService = CustomerService.getInstance();
    customerService.login();
  }, [props.product.sku]);

  const HandleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const customerService = CustomerService.getInstance();
    customerService.login().then(() => {
      for (let i = 0; i < productCount; i++)
        customerService.loggedInCustomer?.cartProducts.push(props.product);

      customerService.update();

      navigate(0);
    });
  };

  return (
    <div className="w-full h-screen fixed flex items-center justify-center top-0 left-0 z-50 mx-auto bg-black bg-opacity-75">
      <div className="w-full p-28">
        <div className="flex p-8 bg-white rounded-lg shadow-md items-center justify-between my-4 text-gray-900">
          <div className="w-1/2">
            <img
              src={imgURL}
              alt={`Hình ảnh sản phẩm ${props.product.productName}`}
              title={`Hình ảnh sản phẩm ${props.product.productName}`}
              className="rounded-lg w-2/3 h-auto mx-auto"
            />
          </div>

          <div className="w-1/2 text-sm text-gray-900 flex flex-col">
            <h5 className="text-2xl font-semibold mb-1">
              {props.product.productName}
            </h5>
            <span className="text-gray-500 mb-8">
              SKU: {props.product.sku.toString()}
            </span>

            <span className="text-4xl text-winmart mb-6">
              {props.product.listedPrice.toLocaleString()} ₫
            </span>

            <div className="h-px w-full bg-gray-400 my-6"></div>

            <div className="flex gap-x-16 items-center">
              <span className="font-semibold">Vận chuyển</span>
              <div className="flex flex-col gap-y-1">
                <span>Miễn phí giao hàng cho đơn từ 300.000đ.</span>
                <span>Giao hàng trong 2 giờ.</span>
              </div>
            </div>

            <div className="h-px w-full bg-gray-400 my-6"></div>

            <div className="flex gap-x-20 items-center">
              <span className="font-semibold">Số lượng</span>
              <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    productCount > 1
                      ? setProductCount(productCount - 1)
                      : setProductCount(1)
                  }
                  title="Giảm số lượng mua"
                  className="p-1 hover:bg-gray-200"
                >
                  <Minus />
                </button>
                <span className="w-8 text-center h-full">{productCount}</span>
                <button
                  onClick={() => setProductCount(productCount + 1)}
                  title="Tăng số lượng mua"
                  className="p-1 hover:bg-gray-200"
                >
                  <Plus />
                </button>
              </div>
            </div>

            <button
              onClick={HandleAddToCart}
              className="flex items-center justify-center text-sm px-4 py-1.5 border border-winmart rounded-lg hover:bg-winmart hover:text-white font-light text-gray-900 bg-white w-52 mt-12"
            >
              <span className="mr-1">
                <PackagePlus size={15} />
              </span>
              <span>Thêm vào giỏ</span>
            </button>
          </div>
        </div>

        <div className="flex gap-x-8 mt-4">
          <div className="flex flex-col rounded-lg shadow-md bg-white p-6 w-2/3 text-sm gap-y-4 overflow-auto">
            <h5 className="text-xl font-semibold">Mô tả</h5>

            {props.product.description ? (
              <span className="text-justify break-words leading-6">
                {props.product.description}
              </span>
            ) : (
              <span className="text-justify break-words leading-6">
                Đang cập nhật...
              </span>
            )}

            <span className="text-xl font-semibold">Hướng dẫn sử dụng</span>
            {props.product.userManual ? (
              <span className="text-justify break-words leading-6">
                {props.product.userManual}
              </span>
            ) : (
              <span className="text-justify break-words leading-6">
                Đang cập nhật...
              </span>
            )}
          </div>

          <div className="flex flex-col rounded-lg shadow-md bg-white p-6 w-1/3 text-sm text-gray-900">
            <h5 className="text-xl font-semibold">Thông tin</h5>

            <div className="flex my-4 items-center">
              <span className="w-32">Xuất xứ</span>
              {props.product.origin ? (
                <span className="text-justify break-words leading-6">
                  {props.product.origin}
                </span>
              ) : (
                <span className="text-justify break-words leading-6">
                  Đang cập nhật...
                </span>
              )}
            </div>
            <div className="bg-gray-400 w-full h-px"></div>

            <div className="flex my-4 items-center">
              <span className="w-32">Thương hiệu</span>
              <span className="uppercase">{props.product.brand}</span>
            </div>
            <div className="bg-gray-400 w-full h-px"></div>

            <div className="flex my-4 items-center">
              <span className="w-32">Bảo quản</span>
              {props.product.preservedManual ? (
                <span className="text-justify break-words leading-6">
                  {props.product.preservedManual}
                </span>
              ) : (
                <span className="text-justify break-words leading-6">
                  Đang cập nhật...
                </span>
              )}
            </div>
            <div className="bg-gray-400 w-full h-px"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
