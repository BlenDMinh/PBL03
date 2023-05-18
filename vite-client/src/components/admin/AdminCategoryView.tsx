import { useEffect, useState } from "react";
import { CategoryService } from "../../admin/services/implement/CategoryService";
import { Category } from "../../models/Category";

interface AdminCategoryViewProp {
  category: Category | undefined;
  onSubmit: (category: Category | undefined) => void;
}

function AdminCategoryView(props: AdminCategoryViewProp) {
  const [category, setCategory] = useState<Category | undefined>(undefined);
  useEffect(() => {
    console.log(props.category);
    if (props.category == undefined) return;
    const service = CategoryService.getInstance();
    service.getById(props.category?.categoryId).then((_category) => {
      setCategory(_category);
    });
  }, [props.category]);
  if (category == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(category);
        }}
        className="mx-16 my-16 ml-32 bg-white w-auto h-5/6 rounded-xl p-10"
      >
        <label htmlFor="name">Tên danh mục: </label>
        <input
        type="text"
        name="categoryName"
        id="categoryName"
        value={category.categoryName}
        onChange={(event) => {
          const updatedCategory = { ...category }; // Create a copy of the category object
          updatedCategory.categoryName = event.target.value; // Update the copied object
          setCategory(updatedCategory); // Set the updated object as the new state value
        }}
        required
        />
        <div className="flex gap-5">
          <label htmlFor="subCategory">Subcategories</label>
          <input name="catChoice" id="subCategory" value="sub" type="radio" />
          <label htmlFor="products">Products</label>
          <input name="catChoice" id="products" value="pro" type="radio" />
        </div>
        
      </form>
    </div>
  );
}

export default AdminCategoryView;
