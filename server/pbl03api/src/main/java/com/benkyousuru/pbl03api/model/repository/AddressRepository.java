package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.Address;

public interface AddressRepository extends CrudRepository<Address, Integer> {
    
}
