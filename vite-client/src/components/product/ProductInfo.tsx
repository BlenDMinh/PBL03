import { Minus, PackagePlus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/Product";
import { CustomerService } from "../../services/CustomerService";
import { ProductService } from "../../services/ProductService";

interface ProductInfoProps {
  product: Product;
}

function ProductInfo(props: ProductInfoProps) {
  const navigate = useNavigate();

  const [imgURL, setImgURL] = useState<string>("");
  const [productCount, setProductCount] = useState<number>(1);
  const [cannotAdd, setCannotAdd] = useState<boolean>(false);
  const [productQuantity, setProductQuantity] = useState<number>(0);

  useEffect(() => {
    const service = ProductService.getInstance();
    const url = service.getProductImagePath(props.product.sku);
    setImgURL(url);

    const customerService = CustomerService.getInstance();
    customerService.login();

    const productService = ProductService.getInstance();
    productService.getById(props.product.sku).then((quantity) => {
      setProductQuantity(quantity.quantity);
    });
  }, [props.product.sku]);

  const HandleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const customerService = CustomerService.getInstance();
    customerService.login().then(() => {
      for (let i = 0; i < productCount; i++)
        customerService.loggedInCustomer?.cartProducts.push(props.product);

      customerService.update().then(() => {
        navigate("/cart");
      });
    });
  };

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center top-0 left-0 z-40 bg-black bg-opacity-75 text-gray-900">
      <div className="w-[85vw]">
        <div className="flex bg-white rounded-md items-center justify-between min-h-[60vh] max-h-[90vh]">
          <div className="w-1/2 p-4">
            <img
              src={imgURL}
              alt={`Hình ảnh sản phẩm ${props.product.productName}`}
              title={`Hình ảnh sản phẩm ${props.product.productName}`}
              className="rounded-lg w-auto h-auto max-h-[50vh] mx-auto"
            />
          </div>

          <div className="w-1/2 text-sm flex flex-col">
            <h5 className="text-2xl font-semibold mb-1 tracking-wide">
              {props.product.productName}
            </h5>

            <span className="text-gray-600">
              SKU: {props.product.sku.toString()}
            </span>

            <span className="text-4xl text-winmart my-6">
              {props.product.listedPrice.toLocaleString()} ₫
            </span>

            <div className="h-px w-3/4 bg-gray-400"></div>

            <div className="flex gap-x-16 items-center my-4">
              <span className="font-semibold text-base">Vận chuyển</span>
              <div className="flex flex-col gap-y-1">
                <span>Miễn phí giao hàng cho đơn từ 300.000đ.</span>
                <span>Giao hàng trong 2 giờ.</span>
              </div>
            </div>

            <div className="h-px w-3/4 bg-gray-400"></div>

            <div className="flex gap-x-20 items-center my-4">
              <span className="font-semibold text-base mr-2">Số lượng</span>

              <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    productCount > 1
                      ? setProductCount(productCount - 1)
                      : setProductCount(1)
                  }
                  title="Giảm số lượng mua"
                  className="p-1 border-r border-gray-400 hover:bg-gray-200"
                >
                  <Minus size={25} />
                </button>

                <span className="w-20 text-base text-center h-full">
                  {productCount} / {productQuantity}
                </span>

                <button
                  onClick={() => {
                    if (productCount + 1 <= productQuantity)
                      setProductCount(productCount + 1);
                  }}
                  title="Tăng số lượng mua"
                  className="p-1 border-l border-gray-400 hover:bg-gray-200"
                >
                  <Plus size={25} />
                </button>
              </div>
            </div>

            <button
              onClick={HandleAddToCart}
              className="flex items-center justify-center text-sm px-4 py-2 border border-winmart rounded-md hover:bg-winmart hover:text-white w-52 mt-10"
            >
              <span className="mr-1">
                <PackagePlus size={15} />
              </span>
              <span>Thêm vào giỏ</span>
            </button>
          </div>
        </div>

        <div className="flex gap-x-8 mt-4">
          <div className="flex flex-col rounded-lg shadow-md bg-white px-8 py-6 w-2/3 text-sm overflow-auto">
            <h5 className="text-xl font-semibold">Mô tả</h5>

            {props.product.description ? (
              <span className="text-justify break-words my-3">
                {props.product.description}
              </span>
            ) : (
              <span className="text-justify break-words my-3">
                Đang cập nhật...
              </span>
            )}

            <span className="text-xl font-semibold mt-2">
              Hướng dẫn sử dụng
            </span>
            {props.product.userManual ? (
              <span className="text-justify break-words my-3">
                {props.product.userManual}
              </span>
            ) : (
              <span className="text-justify break-words my-3">
                Đang cập nhật...
              </span>
            )}
          </div>

          <div className="flex flex-col rounded-lg shadow-md bg-white h-fit p-6 w-1/3 text-sm text-gray-900">
            <h5 className="text-xl font-semibold tracking-wide mb-2">
              Thông tin
            </h5>

            <div className="flex my-3 items-center">
              <span className="w-32 font-semibold">Xuất xứ</span>
              {props.product.origin ? (
                <span className="text-justify break-words">
                  {props.product.origin}
                </span>
              ) : (
                <span className="text-justify break-words">
                  Đang cập nhật...
                </span>
              )}
            </div>

            <div className="bg-gray-400 w-full h-px"></div>

            <div className="flex my-4 items-center">
              <span className="w-32 font-semibold">Thương hiệu</span>
              <span className="uppercase">{props.product.brand}</span>
            </div>
            <div className="bg-gray-400 w-full h-px"></div>

            <div className="flex mt-4 mb-2 items-center">
              <span className="w-32 font-semibold">Bảo quản</span>
              {props.product.preservedManual ? (
                <span className="text-justify break-words">
                  {props.product.preservedManual}
                </span>
              ) : (
                <span className="text-justify break-words">
                  Đang cập nhật...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
