import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/implement/ProductService";
import ProductBox from "../product/ProductBox";

interface ShowCategoryProps {
  id: number;
}

const service = new ProductService();

function ShowCategory(props: ShowCategoryProps) {
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    const arr: Product[] = [];
    service.getByCategory(props.id, 1, 12).then((data) => {
      for (let i = 0; i < data.length; i++) arr.push(data[i]);
      setProductList(arr);
    });
  }, []);

  return (
    <div className="my-4 grid grid-cols-4">
      {productList.map((val, id) => {
        return (
          <div key={id}>
            <ProductBox product={val} />
          </div>
        );
      })}
    </div>
  );
}

export default ShowCategory;
