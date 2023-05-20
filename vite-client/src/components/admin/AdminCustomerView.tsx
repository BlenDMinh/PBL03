import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Customer } from "../../models/Customer";
import { Gender } from "../../models/Gender";

interface AdminCustomerViewProp {
  customer: Customer | undefined;
  onSubmit: (customer: Customer | undefined) => void;
}

function AdminCustomerView(props: AdminCustomerViewProp) {
  const [customer, setCustomer] = useState<Customer | undefined>(undefined);
  useEffect(() => {
    if (props.customer == undefined) return;
    setCustomer(props.customer);
  }, [props.customer]);
  if (customer == undefined) return <div></div>;
  return (
    <div className="fixed w-screen h-screen bg-slate-900 bg-opacity-50 z-40">
      <form
        action=""
        onSubmit={() => {
          props.onSubmit(customer);
        }}
        className="mx-16 my-16 ml-96 bg-white w-2/3 h-5/6 rounded-xl p-10 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-10 text-lg font-bold">
          <div className="flex justify-between">
            <div></div>
            <button
              type="submit"
              className="hover:bg-white hover:text-slate-700 shadow rounded justify-center items-center flex w-12 h-12 bg-red-500 text-white"
              onClick={() => setCustomer(undefined)}
            >
              <X />
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-slate-500 font-normal w-44">
              Mã Khách Hàng: {customer.customerId}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-44">Họ và Tên:</span>
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
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Email:</span>
            <input
              type="text"
              name="email"
              id="email"
              value={customer?.email}
              onChange={(event) => {
                const updatedCustomer = { ...customer };
                updatedCustomer.email = event.target.value;
                setCustomer(updatedCustomer);
              }}
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
              required
            />
          </div>
          <div className="flex items-center">
            <span className="w-44">Ngày Sinh:</span>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={customer.dateOfBirth?.toString()}
              onChange={(event) => {
                const updatedCustomer = { ...customer };
                updatedCustomer.dateOfBirth = z
                  .date()
                  .safeParse(new Date(event.target.value).toUTCString());
                console.log(updatedCustomer.dateOfBirth);
                setCustomer(updatedCustomer);
              }}
              placeholder="Birthday"
              className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md font-normal"
            />
          </div>
          <div className="flex items-center">
            <div className="flex gap-5">
              <span className="w-44">Giới tính:</span>
              <input
                type="radio"
                name="gender"
                id="MALE"
                checked={customer.gender === Gender[Gender.MALE]}
                value="MALE"
                onChange={(e) => {
                  const newCustomer = { ...customer };
                  newCustomer.gender = "MALE";
                  setCustomer(newCustomer);
                }}
              />
              <label htmlFor="MALE">Nam</label>
              <input
                type="radio"
                name="gender"
                id="FEMALE"
                value="FEMALE"
                checked={customer.gender === Gender[Gender.FEMALE]}
                onChange={(e) => {
                  const newCustomer = { ...customer };
                  newCustomer.gender = "FEMALE";
                  setCustomer(newCustomer);
                }}
              />
              <label htmlFor="FEMALE">Nữ</label>
            </div>
          </div>
        </div>
        <button
          className="mt-4 z-50 border flex self-center justify-center items-center gap-5 px-4 py-5 rounded-md text-xl hover:text-slate-500 hover:bg-inherit font-bold bg-winmart text-white w-40 h-16"
          onClick={() => {
            props.onSubmit(customer);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminCustomerView;
