package com.benkyousuru.pbl03api.model.model;

import com.benkyousuru.pbl03api.model.entity.Permission;

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
public class LoginResponse {
    private CustomerModel customer;
    private String token;
    private Permission permission;
}
