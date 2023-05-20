/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WinmartLogoRed from "../img/WinmartLogoRed.png";
import { Address } from "../models/Address";
import { AddressType } from "../models/AddressType";
import { Customer } from "../models/Customer";
import { Gender } from "../models/Gender";
import { CustomerService } from "../services/CustomerService";

interface RegCustomer {
  email?: string;
  customerName?: string;
  gender?: number;
  dateOfBirth?: Date;
  password?: string;
  repassword?: string;
}

interface RegAddress {
  city?: string;
  ward?: string;
  country?: string;
  district?: string;
  apartmentNumber?: string;
}

function Register() {
  const navigator = useNavigate();
  const [customer, setCustomer] = useState<RegCustomer>({});
  const [address, setAddress] = useState<RegAddress>({});

  useEffect(() => {
    document.title = "Đăng ký | Winmart";
  }, []);

  return (
    <main className="w-screen h-screen bg-[#f0f8ff] text-gray-900 text-sm select-none">
      <form
        action="/"
        className="max-w-fit px-10 mx-auto h-full flex flex-col justify-center items-center bg-white gap-y-6"
      >
        <a href="/">
          <img
            src={WinmartLogoRed}
            alt={"Winmart Logo"}
            title="Winmart Logo"
            className="w-80 h-auto"
          />
        </a>
        <div className="flex flex-row gap-x-20">
          <div className="flex flex-col text-sm gap-y-6">
            <h5 className="text-base my-2">Thông tin cá nhân</h5>
            <div className="flex flex-col gap-y-4">
              <input
                type="email"
                name="email"
                id="email"
                value={customer.email}
                onChange={(event) => {
                  customer.email = event.target.value;
                  setCustomer(customer);
                }}
                placeholder="Email"
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="text"
                name="customerName"
                id="customerName"
                value={customer.customerName}
                onChange={(event) => {
                  customer.customerName = event.target.value;
                  setCustomer(customer);
                }}
                placeholder="Họ và tên"
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <div className="flex gap-x-8 items-center">
                <label htmlFor="gender">Giới tính: </label>
                <div className="flex items-center">
                  <input
                    id="MALE"
                    type="radio"
                    value="1"
                    name="gender"
                    onClick={() => {
                      customer.gender = Gender.MALE;
                      setCustomer(customer);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="MALE" className="ml-2 text-gray-900">
                    Nam
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="FEMALE"
                    type="radio"
                    value="2"
                    name="gender"
                    onClick={() => {
                      customer.gender = Gender.FEMALE;
                      setCustomer(customer);
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="FEMALE" className="ml-2 text-gray-900">
                    Nữ
                  </label>
                </div>
              </div>

              <input
                type="date"
                name="birthday"
                id="birthday"
                value={customer.dateOfBirth?.toDateString()}
                onChange={(event) => {
                  customer.dateOfBirth = new Date(event.target.value);
                  setCustomer(customer);
                }}
                placeholder="Birthday"
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="password"
                name="password"
                id="password"
                value={customer.password}
                onChange={(event) => {
                  customer.password = event.target.value;
                  setCustomer(customer);
                }}
                placeholder="Mật khẩu"
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="password"
                name="re_password"
                id="re_password"
                value={customer.repassword}
                onChange={(event) => {
                  customer.repassword = event.target.value;
                  setCustomer(customer);
                }}
                placeholder="Nhập lại mật khẩu"
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col text-sm gap-y-6">
            <h5 className="text-base my-2">Thông tin địa chỉ</h5>
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Quốc tịch"
                value={address.country}
                onChange={(event) => {
                  address.country = event.target.value;
                  setAddress(address);
                }}
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="text"
                name="city"
                id="city"
                placeholder="Thành phố"
                value={address.city}
                onChange={(event) => {
                  address.city = event.target.value;
                  setAddress(address);
                }}
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="text"
                name="district"
                id="district"
                placeholder="Quận/Huyện"
                value={address.district}
                onChange={(event) => {
                  address.district = event.target.value;
                  setAddress(address);
                }}
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="text"
                name="ward"
                id="ward"
                placeholder="Phường"
                value={address.ward}
                onChange={(event) => {
                  address.ward = event.target.value;
                  setAddress(address);
                }}
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />

              <input
                type="text"
                name="address"
                id="address"
                placeholder="Địa chỉ"
                value={address.apartmentNumber}
                onChange={(event) => {
                  address.apartmentNumber = event.target.value;
                  setAddress(address);
                }}
                required
                className="w-80 px-3 py-2 outline-none border border-gray-400 rounded-md shadow-md"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          title="Đăng nhập"
          className="w-60 mx-auto p-2 bg-winmart rounded-lg shadow-md text-zinc-100"
          onClick={() => {
            // CHECK CONSTRAINT HERE
            if (customer.password !== customer.repassword) {
              console.log("THEY ARE NOT THE SAME");
              return;
            }
            const _address: Address = {
              addressId: -1,
              country: address.country!,
              city: address.city!,
              district: address.district!,
              ward: address.ward!,
              apartmentNumber: address.apartmentNumber!,
              addressType: AddressType.DEFAULT,
            };
            const _customer: Customer = {
              customerId: -1,
              email: customer.email!,
              customerName: customer.customerName!,
              gender: customer.gender!,
              dateOfBirth: customer.dateOfBirth!,
              orders: [],
              addresses: [_address],
              cartProducts: [],
            };
            console.log(_customer);
            const service = CustomerService.getInstance();
            service.register(_customer, customer.password!).then(() => {
              navigator("/");
            });
          }}
        >
          Đăng ký
        </button>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-4 bg-gray-200 border-0" />
          <span className="absolute px-3 text-sm font-light text-gray-400 -translate-x-1/2 bg-white left-1/2">
            hoặc
          </span>
        </div>

        <a href="/login">
          <button
            title="Đăng nhập"
            className="hover:bg-gray-200 w-60 border border-winmart p-2 rounded-lg shadow-md text-winmart bg-zinc-50 mx-auto"
          >
            Đăng nhập
          </button>
        </a>
      </form>
    </main>
  );
}

export default Register;
