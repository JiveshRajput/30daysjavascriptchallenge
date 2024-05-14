import { CustomerSchema } from '../types'

export class Customer {
    customers;

    constructor() { }

    getAllCustomers() {
        return this.customers;
    }

    addCustomer(customer: CustomerSchema) {
        this.customers.push(customer);
    }

    deleteCustomer(customerId: string) {
        this.customers.filter((customer: CustomerSchema) => customer.customerId !== customerId)
    }

}