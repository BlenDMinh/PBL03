import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { ProductsSchema } from "./_models/Product";

function App() {
  const getProducts = () =>
    fetch("http://localhost:8080/api/product?pageNum=0&pageSize=8")
      .then((res) => res.json())
      .then((data) => ProductsSchema.parse(data));

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <p>Data is loading...</p>;
  }

  if (isFetching) {
    return <p>Data is fetching</p>;
  }

  if (error) {
    return <p>There was an error when fetching your data.</p>;
  }

  return (
    <ul className="flex flex-col">
      {data?.map((value, id) => {
        return <li key={id}>{value.productName}</li>;
      })}
    </ul>
  );
}

export default App;
