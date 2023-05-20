import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { ProductService } from "../services/ProductService";
import ProductBox from "./product/ProductBox";

interface ShowCategoryProps {
  id: number;
  name: string;
}

function ShowCategory(props: ShowCategoryProps) {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const service = ProductService.getInstance();
      const arr: unknown[] = [];

      service.getByCategory(props.id, 1, 18).then((data) => {
        for (let i = 0; i < data.length; i++) arr.push(data[i] as Product);

        setProductList(
          (arr as Product[]).sort((a, b) => a.listedPrice - b.listedPrice)
        );
      });
    } catch (error) {
      console.error(error);
    }
  }, [props.id]);

  if (productList.length == 0) return <div></div>;

  return (
    <div className="bg-white shadow-md rounded-md px-10 py-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg tracking-wide">{props.name}</h3>

        <a
          href={"/category/" + props.id}
          className="text-winmart flex items-center hover:underline"
        >
          Xem thêm
          <span>
            <ChevronRight size={15} />
          </span>
        </a>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-4">
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
