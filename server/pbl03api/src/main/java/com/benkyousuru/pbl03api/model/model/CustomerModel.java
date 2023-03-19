package com.benkyousuru.pbl03api.model.model;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.entity.Gender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerModel {
    private Integer customerId;
    private String customerName;
    private Gender gender;
    private String email;
    private Date dateOfBirth;
    private AddressModel homeAddress;
    private List<ProductModel> cartProducts;
    private List<OrderModel> orders;
    private List<AddressModel> deliveryAddresses;

    public CustomerModel(Customer customer) {
        this.customerId = customer.getCustomerId();
        this.customerName = customer.getCustomerName();
        this.gender = customer.getGender();
        this.email = customer.getEmail();
        this.dateOfBirth = customer.getDateOfBirth();
        if(customer.getHomeAddress() != null)
            this.homeAddress = new AddressModel(customer.getHomeAddress());
        if(customer.getCartProducts() != null)
            this.cartProducts = customer.getCartProducts().stream().map(e -> new ProductModel(e)).collect(Collectors.toList());
        if(customer.getOrders() != null)
            this.orders = customer.getOrders().stream().map(e -> new OrderModel(e)).collect(Collectors.toList());
        if(customer.getDeliveryAddresses() != null)
            this.deliveryAddresses = customer.getDeliveryAddresses().stream().map(e -> new AddressModel(e)).collect((Collectors.toList()));
    }
}
