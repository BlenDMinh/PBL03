import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AddToCart from "@/components/addToCart";
import { BsCartPlus } from "react-icons/bs";
import { ProductService } from "@/services/implement/ProductService";

export default function Home() {
  var service = new ProductService();
  service.getByCategory(51, 0, 8).then((e) => {
    console.log(e);
  });

  return (
    <div className="font-own">
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="max-w-6xl mx-auto flex justify-between py-2">
        <AddToCart />
        <AddToCart />
        <AddToCart />
      </div>
      <Footer />
    </div>
  );
}
