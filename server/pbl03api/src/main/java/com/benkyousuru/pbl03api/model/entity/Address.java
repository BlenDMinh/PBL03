package com.benkyousuru.pbl03api.model.entity;

import com.benkyousuru.pbl03api.model.model.AddressModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "address_id")
    private Integer addressId;

    private String country;
    private String city;
    private String district;
    private String ward;
    private String apartmentNumber;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Enumerated(EnumType.ORDINAL)
    private AddressType addressType;

    public Address(AddressModel address) {
        this.addressId = address.getAddressId();
        this.country = address.getCountry();
        this.city = address.getCity();
        this.district = address.getDistrict();
        this.ward = address.getWard();
        this.apartmentNumber = address.getApartmentNumber();
        this.addressType = address.getAddressType();
    }
}
