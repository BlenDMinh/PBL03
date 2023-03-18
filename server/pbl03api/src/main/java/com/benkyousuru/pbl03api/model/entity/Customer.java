package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @OneToOne(targetEntity = Address.class, fetch = FetchType.LAZY)
    private Address homeAddress;

    private String _password;
    
    @ManyToMany(targetEntity = Product.class, fetch = FetchType.LAZY)
    private List<Product> cartProducts;

    @OneToMany(targetEntity = Order.class, fetch = FetchType.LAZY)
    private List<Order> orders;

    @OneToMany(targetEntity = Address.class, fetch = FetchType.LAZY)
    private List<Address> deliveryAddresses;
}
