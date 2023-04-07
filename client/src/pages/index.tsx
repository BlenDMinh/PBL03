import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="font-own">
      <Head>
        <title>Siêu thị Winmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
