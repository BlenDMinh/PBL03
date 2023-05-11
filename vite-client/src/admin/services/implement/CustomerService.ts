import { ICustomerService } from "../ICustomerService";

class CustomerService implements ICustomerService {
    getAll(): Promise<z.infer<typeof CustomersSchema>> {

    }
    getById(id: number): Promise<z.infer<typeof CustomerSchema>> {

    }
    insert(category: Customer): Promise<z.infer<typeof CustomerSchema>> {

    }
    update(category: Customer): Promise<z.infer<typeof CustomerSchema>> {

    }
    delete(category: Customer): Promise<void> {

    }
    deleteById(id: number): Promise<void> {
        
    }
}