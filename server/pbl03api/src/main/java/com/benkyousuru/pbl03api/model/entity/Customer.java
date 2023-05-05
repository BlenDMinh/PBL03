package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.ArrayList;

import com.benkyousuru.pbl03api.model.model.CustomerModel;

import jakarta.persistence.CascadeType;
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
    
    @ManyToMany(targetEntity = Product.class, fetch = FetchType.EAGER)
    @Builder.Default
    private List<Product> cartProducts = new ArrayList<>();

    @Builder.Default
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private Set<Address> addresses = new HashSet<>();

    public Customer(CustomerModel model) {
        this.customerId = model.getCustomerId();
        this.customerName = model.getCustomerName();
        this.gender = model.getGender();
        this.email = model.getEmail();
        this.dateOfBirth = model.getDateOfBirth();
        if(this.addresses == null)
            this.addresses = new HashSet<>();
        if(this.orders == null)
            this.orders = new ArrayList<>();
        if(this.cartProducts == null)
            this.cartProducts = new ArrayList<>();
        if(model.getCartProducts() != null) {
            this.cartProducts.clear();
            this.cartProducts.addAll(model.getCartProducts().stream().map(e -> new Product(e)).toList());
        }
        if(model.getOrders() != null) {
            this.orders.clear();
            this.orders.addAll(model.getOrders().stream().map(e -> new Order(e)).toList());
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
        address.setCustomer(null);
        this.addresses.remove(address);
    }
}