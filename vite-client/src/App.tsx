import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { useQuery } from "@tanstack/react-query";
// import { ProductsSchema } from "./_models/Product";

function App() {
  // const getProducts = () =>
  //   fetch("http://localhost:8080/api/product?pageNum=0&pageSize=8")
  //     .then((res) => res.json())
  //     .then((data) => ProductsSchema.parse(data));

  // const { data, isLoading, isFetching, error } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });

  // if (isLoading) {
  //   return <p>Data is loading...</p>;
  // }

  // if (isFetching) {
  //   return <p>Data is fetching</p>;
  // }

  // if (error) {
  //   return <p>There was an error when fetching your data.</p>;
  // }

  return (
    <main className="bg-gray-300 w-screen h-screen">
      <Navbar user={undefined} />
      <Footer />
    </main>
  );
}

export default App;
