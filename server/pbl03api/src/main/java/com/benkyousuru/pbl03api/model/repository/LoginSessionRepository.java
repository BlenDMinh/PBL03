package com.benkyousuru.pbl03api.model.repository;

import org.springframework.data.repository.CrudRepository;

import com.benkyousuru.pbl03api.model.entity.LoginSession;

public interface LoginSessionRepository extends CrudRepository<LoginSession, String> {
    
}
