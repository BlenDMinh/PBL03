"use client";

import { FC, useEffect, useState } from "react";
import { appContainer } from "@/container";
import { ICustomerService } from "@/services/ICustomerService";
import { TYPES } from "@/types";
import "reflect-metadata";
import { Customer } from "@/models/Customer";
import { Gender } from "@/models/Gender";

const Page : FC = ({}) => {
    var customer: Customer = {
        customerId: -1,
        customerName: "Pham Trung Hieu",
        email: "trunghieupham03@gmail.com",
        gender: Gender.MALE,
        dateOfBirth: new Date("2003-10-05"),
        orders: [],
        addresses: [],
        cartProducts: []
    };
    var service = appContainer.get<ICustomerService>(TYPES.CustomerService);
    service.register(customer, "123456789");
    return (
        <main>
            {JSON.stringify(customer)}
        </main>
    );
}

export default Page;