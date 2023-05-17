import { Edit2, LayoutList, X } from "lucide-react";
import { Category } from "../../models/Category";

interface CategoryProp {
  category: Category;
}

function AdminCategoryRow(props: CategoryProp) {
  return (
    <div className="z-10 h-20 items-center justify-between flex">
      <div className="flex flex-row gap-5">
        <span className="text-gray-400 text-sm  w-36">
          {"ID: " + props.category.categoryId}
        </span>
        <LayoutList />
        <span>{props.category.categoryName}</span>
      </div>
      <div className="flex flex-row w-40 gap-5">
        <button className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-green-500 hover:text-white">
          <Edit2 />
        </button>
        <button className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-red-500 hover:text-white">
          <X />
        </button>
      </div>
    </div>
  );
}

export default AdminCategoryRow;
