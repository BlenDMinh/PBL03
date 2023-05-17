import { useState } from "react";

function AdminProduct() {
  const [readyForAdd, setReadyForAdd] = useState<boolean>(false);
  const [readyForUpdate, setReadyForUpdate] = useState<boolean>(false);
  const [readyForDelete, setReadyForDelete] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-around items-center">
        <button
          className="p-4 rounded-md shadow-md"
          onClick={() => {
            setReadyForAdd(true);
            setReadyForUpdate(false);
            setReadyForDelete(false);
          }}
        >
          Thêm
        </button>

        <button
          className="p-4 rounded-md shadow-md"
          onClick={() => {
            setReadyForUpdate(true);
            setReadyForAdd(false);
            setReadyForDelete(false);
          }}
        >
          Cập nhật
        </button>

        <button
          className="p-4 rounded-md shadow-md"
          onClick={() => {
            setReadyForDelete(true);
            setReadyForAdd(false);
            setReadyForUpdate(false);
          }}
        >
          Xoá
        </button>
      </div>

      {readyForAdd ? <AddProduct /> : null}
      {readyForUpdate ? <UpdateProduct /> : null}
      {readyForDelete ? <DeleteProduct /> : null}
    </div>
  );
}

export default AdminProduct;

function AddProduct() {
  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <button onClick={handleAddProduct} type="submit"></button>
      </form>
    </div>
  );
}

function UpdateProduct() {
  return <div></div>;
}

function DeleteProduct() {
  return <div></div>;
}
