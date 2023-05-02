import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/implement/ProductService";
import ProductBox from "../product/ProductBox";

interface ShowCategoryProps {
  id: number;
  name: string;
}

function ShowCategory(props: ShowCategoryProps) {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const arr: Product[] = [];
    const service = ProductService.getInstance();
    service.getByCategory(props.id, 1, 20).then((data) => {
      for (let i = 0; i < data.length; i++) arr.push(data[i]);
      arr.sort((a, b) => a.listedPrice - b.listedPrice);
      setProductList(arr);
    });
  }, [props.id]);

  if (productList.length == 0) return <div></div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-900">{props.name}</h3>
        <a
          href=""
          className="text-base text-winmart flex items-center hover:underline"
        >
          Xem thêm
          <span>
            <ChevronRight size={15} />
          </span>
        </a>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {productList.map((val, id) => {
          return (
            <div key={id}>
              <ProductBox product={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowCategory;
