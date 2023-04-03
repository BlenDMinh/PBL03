package com.benkyousuru.pbl03api.model.model;

import com.benkyousuru.pbl03api.model.entity.Address;
import com.benkyousuru.pbl03api.model.entity.AddressType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddressModel {
    private Integer addressId;
    private String country;
    private String city;
    private String district;
    private String ward;
    private String apartmentNumber;
    private AddressType addressType;
    
    public AddressModel(Address address) {
        this.addressId = address.getAddressId();
        this.country = address.getCountry();
        this.city = address.getCity();
        this.district = address.getDistrict();
        this.ward = address.getWard();
        this.apartmentNumber = address.getApartmentNumber();
        this.addressType = address.getAddressType();
    }
}
