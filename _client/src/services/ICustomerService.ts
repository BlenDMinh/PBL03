import { CustomerModel } from "@/models/CustomerModel";
import { LoginRequest } from "@/models/LoginRequest";
import { LoginResponse } from "@/models/LoginResponse";
import { ProductModel } from "@/models/ProductModel";

export interface ICustomerService {
    register(customer: CustomerModel, password: string): void;
    login(request: LoginRequest): Promise<LoginResponse>;
    logout(): void;
    update(): void;

    getCartProducts(): Promise<ProductModel[]>;
    addProductToCart(sku: Number): void;
    removeProductFromCart(sku: Number): void;
}