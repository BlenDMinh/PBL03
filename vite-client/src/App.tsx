import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShowCategory from "./components/category/ShowCategory";
import { Category } from "./models/Category";
import { CategoryService } from "./services/implement/CategoryService";

const categoryService = new CategoryService();

function App() {
  const [categories, setCategories] = useState<number[]>([]);

  useEffect(() => {
    const arr: number[] = [];
    categoryService.getAll().then((data: Category[]) => {
      for (let i = 0; i < data.length; i++) {
        const categoryId = data[i].categoryId;
        arr.push(categoryId);
      }
      setCategories(arr);
    });
  }, []);

  return (
    <main className="bg-gray-200 w-screen">
      <Navbar user={undefined} />
      <div className="max-w-6xl mx-auto">
        {categories.map((val, id) => {
          return (
            <div key={id}>
              <ShowCategory id={val} />
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

export default App;
