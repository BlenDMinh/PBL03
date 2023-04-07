import { ProductService } from "@/services/implement/ProductService";

export default function ProductSlide() {
  var service = new ProductService();
  service.getByCategory(51, 0, 8).then((e) => {
    console.log(e);
  });
  return <div></div>;
}
