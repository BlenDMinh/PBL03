"use client";

import "reflect-metadata";
import { FC, useEffect } from "react";
import { http } from "@/services/utils/http";
import { LoginRequest } from "@/models/LoginRequest";
import { loggedInCustomer } from "../api/customer/login/route";

const Page = ({}) => {
  useEffect(() => {
    var request: LoginRequest = {
      email: "themysmine@gmail.com",
      password: "ComTMM0112",
    };
    http
      .post(
        "http://localhost:3000/api/customer/login",
        new Headers(),
        JSON.stringify(request)
      )
      .then((e) => {
        console.log(loggedInCustomer);
      });
  }, []);
  return <main></main>;
};

export default Page;
