package com.benkyousuru.pbl03api.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class LoginDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer loginDetailId;

    @OneToOne(mappedBy = "loginDetail")
    private Customer customer;

    private String password;
    private Integer hash_round;
}
