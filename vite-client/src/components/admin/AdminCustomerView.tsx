import { Customer } from "../../models/Customer";
import { useEffect, useState } from "react";

interface AdminCustomerViewProp {
  customer: Customer | undefined;
  onSubmit: (customer: Customer | undefined) => void;
}

function AdminCustomerView(props: AdminCustomerViewProp){
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);
  useEffect(() => {
    if (props.customer == undefined) return;
    setCustomer(props.customer)
  }, [props.customer]);
  if (customer == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(customer);
        }}
        className="mx-16 my-16 ml-32 bg-white w-auto h-5/6 rounded-xl p-10"
      >
        <label htmlFor="customerId">Mã Khách Hàng: </label>
        <input
          type="text"
          name="customerId"
          id="customerId"
          value={customer.customerId}
          onChange={(event) => {
          }}
          required
        /><br />
        <label htmlFor="customerName">Họ và Tên: </label>
        <input
        type="text"
        name="customerName"
        id="customerName"
        value={customer?.customerName}
        onChange={(event) => {
          const updatedCustomer = { ...customer }; 
          updatedCustomer.customerName = event.target.value; 
          setCustomer(updatedCustomer);
        }}
        required
        /><br />
        <label htmlFor="dateOfBirth">Ngày Sinh: </label>
        <input
        type="text"
        name="dateOfBirth"
        id="dateOfBirth"
        value={customer?.dateOfBirth}
        onChange={(event) => {
          const updatedCustomer = { ...customer }; 
          updatedCustomer.dateOfBirth = event.target.value; 
          setCustomer(updatedCustomer); 
        }}
        required
        /><br />
        <label htmlFor="gender">Giới tính: </label>
        <input
        type="text"
        name="gender"
        id="gender"
        value={customer?.gender}
        onChange={(event) => {
          const updatedCustomer = { ...customer }; 
          updatedCustomer.gender = event.target.value; 
          setCustomer(updatedCustomer); 
        }}
        required
        /><br />
         <button
            className=
              "z-50 border flex items-center gap-5 px-4 py-5 rounded-md text-xl text-slate-500 font-bold hover:bg-winmart hover:text-white w-25 mt-4 h-10 m-2"
            onClick={() => {props.onSubmit(customer)}}
          >
            Submit
          </button>
      </form>
    </div>
  );
}

export default AdminCustomerView;
