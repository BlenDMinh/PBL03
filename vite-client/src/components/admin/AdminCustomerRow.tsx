import { Edit2, User } from "lucide-react";
import { Customer } from "../../models/Customer";
import DeletePopup from "./DeletePopup";

interface CustomerProp {
  customer: Customer;
  onEdit: () => void;
  onDelete: () => void;
}

function AdminCustomerRow(props: CustomerProp) {
  return (
    <div className="z-10 h-20 items-center justify-between flex">
      <div className="flex flex-row gap-5">
        <span className="text-gray-400 text-sm  w-36">
          {"ID: " + props.customer.customerId}
        </span>
        <User />
        <span>{props.customer.customerName}</span>
      </div>
      <div className="flex flex-row w-40 gap-5">
        <button
          className="bg-white shadow rounded justify-center items-center flex w-12 h-12 hover:bg-green-500 hover:text-white"
          onClick={() => props.onEdit()}
        >
          <Edit2 />
        </button>
        <DeletePopup
          onYes={() => {
            props.onDelete();
          }}
          onNo={() => {
            return;
          }}
        />
      </div>
    </div>
  );
}

export default AdminCustomerRow;
