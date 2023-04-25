import { FC } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Product } from "@/models/Product";
import ProductInfo from "@/components/product/ProductInfo";

interface PageProps {}

const product: Product = {
  sku: 10617963,
  productName: "MEATDELI [PRE] Thịt heo xay đặc biệt",
  listedPrice: 48018,
  origin: "Vietnam",
  brand: "MEATDELI",
  ingridients: "ingridients",
  userManual: "userManual",
  preservedManual: "preservedManual",
  description: "description",
};

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="bg-gray-300">
      <Navbar user={undefined} />
      <div className="max-w-6xl mx-auto">
        <ProductInfo
          product={product}
          imgURL="https://ss-hn.fptvds.vn/images/2023/03/thit-heo-xay-dac-biet-premium-10617963-20230320015932.jpg"
        />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
