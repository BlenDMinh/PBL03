import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShowCategory from "../components/ShowCategory";
import { Category } from "../models/Category";
import { CategoryService } from "../services/CategoryService";

function App() {
  const [categories, setCategories] = useState<number[]>([]);
  const [categoryName, setCategoryName] = useState<string[]>([]);

  useEffect(() => {
    const id: number[] = [];
    const name: string[] = [];
    const categoryService = CategoryService.getInstance();

    categoryService.getAll().then((data: Category[]) => {
      for (let i = 0; i < data.length; i++) {
        const categoryId = data[i].categoryId;
        const categoryName = data[i].categoryName;
        id.push(categoryId);
        name.push(categoryName);
      }
      setCategories(id);
      setCategoryName(name);
    });
  }, []);

  return (
    <main className="bg-gray-200 w-[calc(100vw - 18px)] select-none font-sans text-gray-900 text-sm">
      <Navbar />

      <div className="w-[80vw] mx-auto">
        {categories.map((val, id) => {
          return (
            <div key={id}>
              <ShowCategory id={val} name={categoryName[id]} />
            </div>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}

export default App;
