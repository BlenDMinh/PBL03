package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.model.CustomerModel;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "customer_id")
    private Integer customerId;

    private String customerName;
    
    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    private String email;

    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "login_detail_id")
    @Builder.Default
    private LoginDetail loginDetail = new LoginDetail();
    
    @ManyToMany(targetEntity = Product.class, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Product> cartProducts = new ArrayList<>();

    @OneToMany(targetEntity = Order.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "order_id")
    @Builder.Default
    private List<Order> orders = new ArrayList<>();

    @OneToMany(mappedBy = "customer", cascade = CascadeType.PERSIST)
    @Builder.Default
    private List<Address> addresses = new ArrayList<>();

    public Customer(CustomerModel model) {
        this.customerId = model.getCustomerId();
        this.customerName = model.getCustomerName();
        this.gender = model.getGender();
        this.email = model.getEmail();
        this.dateOfBirth = model.getDateOfBirth();
        if(this.addresses == null)
            this.addresses = new ArrayList<>();
        if(this.orders == null)
            this.orders = new ArrayList<>();
        if(this.cartProducts == null)
            this.cartProducts = new ArrayList<>();
        if(model.getCartProducts() != null) {
            this.cartProducts.clear();
            this.cartProducts.addAll(model.getCartProducts().stream().map(e -> new Product(e)).collect(Collectors.toList()));
        }
        if(model.getOrders() != null) {
            this.orders.clear();
            this.orders.addAll(model.getOrders().stream().map(e -> new Order(e)).collect(Collectors.toList()));
        }
        if(model.getAddresses() != null) {
            this.addresses.clear();
            model.getAddresses().forEach(e -> addAddress(new Address(e)));
        }
    }

    public void setLoginDetail(LoginDetail loginDetail) {
        this.loginDetail = loginDetail;
        loginDetail.setCustomer(this);
    }

    public void addAddress(Address address) {
        this.addresses.add(address);
        address.setCustomer(this);
    }

    public void removeAddress(Address address) {

    }
}