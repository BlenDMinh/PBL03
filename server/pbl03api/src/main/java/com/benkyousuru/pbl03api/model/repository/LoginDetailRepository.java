package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.LoginDetail;

public interface LoginDetailRepository extends CrudRepository<LoginDetail, Integer> {
    
}
