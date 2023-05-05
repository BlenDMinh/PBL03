package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.model.OrderModel;

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
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orderId;

    @OneToOne(targetEntity = Address.class)
    private Address address;

    @Temporal(TemporalType.DATE)
    private Date dateCreated;

    @Temporal(TemporalType.DATE)
    private Date dateCompleted;

    @Enumerated(EnumType.ORDINAL)
    private Status status;

    @ManyToMany(targetEntity = Product.class, fetch = FetchType.LAZY)
    private List<Product> products;

    public Order(OrderModel order) {
        this.orderId = order.getOrderId();
        if(order.getAddress() != null)
            this.address = new Address(order.getAddress());
        this.dateCreated = order.getDateCreated();
        this.dateCompleted = order.getDateCompleted();
        this.status = order.getStatus();
        if(order.getProducts() != null)
            this.products = order.getProducts().stream().map(e -> new Product(e)).collect(Collectors.toList());
    }
}
