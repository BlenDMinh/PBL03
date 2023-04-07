import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Slider from "@/components/productSlide";

export default function Home() {
  return (
    <div className="font-own">
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Navbar />
      <div className="mx-auto">
        <Slider />
      </div>
      <Footer />
    </div>
  );
}
