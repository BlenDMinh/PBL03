"use client";

import { FC } from "react";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus, PackagePlus } from "lucide-react";
import { Product } from "@/models/Product";

interface ProductInfoProps {
  imgURL: string;
  product: Product;
}

const ProductInfo: FC<ProductInfoProps> = ({ product, imgURL }) => {
  const [productCount, setProductCount] = useState<number>(1);

  return (
    <div>
      <div className="flex p-8 bg-gray-100 rounded-lg shadow-md items-center justify-between my-4">
        <Image
          src={imgURL}
          alt={`Hình ảnh sản phẩm ${product.productName}`}
          title={`Hình ảnh sản phẩm ${product.productName}`}
          width={500}
          height={500}
          priority={true}
          className="rounded-lg"
        />

        <div className="w-1/2 text-sm text-gray-900 flex flex-col">
          <h5 className="text-xl font-semibold mb-1">{product.productName}</h5>
          <span className="text-gray-500 mb-8">
            SKU: {product.sku.toString()}
          </span>

          <span className="text-4xl text-winmart mb-6">
            {product.listedPrice.toLocaleString()} ₫
          </span>

          <div className="h-px w-full bg-gray-400 my-6"></div>

          <div className="flex gap-x-16 items-center">
            <span className="text-gray-500">Vận chuyển</span>
            <div className="flex flex-col gap-y-1">
              <span>Miễn phí giao hàng cho đơn từ 300.000đ.</span>
              <span>Giao hàng trong 2 giờ.</span>
            </div>
          </div>

          <div className="h-px w-full bg-gray-400 my-6"></div>

          <div className="flex gap-x-16 items-center">
            <span>Số lượng</span>
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

          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-light text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 w-48 mt-16">
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0 flex items-center">
              <span className="mr-2">
                <PackagePlus size={20} />
              </span>
              <span className="text-base">Thêm vào giỏ</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex gap-x-8 mt-4">
        <div className="flex flex-col rounded-lg shadow-md bg-gray-100 p-6 w-2/3 text-sm gap-y-4">
          <h5 className="text-xl font-semibold">Mô tả</h5>
          <span className="text-justify break-words leading-6">
            {product.description}
          </span>

          <span className="text-xl font-semibold">Hướng dẫn sử dụng</span>
          <span className="text-justify break-words leading-6">
            {product.userManual}
          </span>
        </div>

        <div className="flex flex-col rounded-lg shadow-md bg-gray-100 p-6 w-1/3 text-sm text-gray-900">
          <h5 className="text-xl font-semibold">Thông tin</h5>

          <div className="flex my-4 items-center">
            <span className="w-32">Xuất xứ</span>
            <span>{product.origin}</span>
          </div>
          <div className="bg-gray-400 w-full h-px"></div>

          <div className="flex my-4 items-center">
            <span className="w-32">Thương hiệu</span>
            <span>{product.brand}</span>
          </div>
          <div className="bg-gray-400 w-full h-px"></div>

          <div className="flex my-4 items-center">
            <span className="w-32">Bảo quản</span>
            <span>{product.preservedManual}</span>
          </div>
          <div className="bg-gray-400 w-full h-px"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
