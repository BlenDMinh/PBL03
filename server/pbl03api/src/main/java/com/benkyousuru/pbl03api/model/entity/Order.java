package com.benkyousuru.pbl03api.model.entity;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @OneToOne(targetEntity = Address.class, fetch = FetchType.LAZY)
    private Address address;

    @Temporal(TemporalType.DATE)
    private Date dateCreated;

    @Temporal(TemporalType.DATE)
    private Date dateCompleted;

    @Enumerated(EnumType.ORDINAL)
    private Status status;

    @OneToMany(targetEntity = Product.class)
    private List<Product> products;
}
