package com.benkyousuru.pbl03api.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
    @Column(name = "login_detail_id")
    private Integer loginDetailId;

    @OneToOne(mappedBy = "loginDetail")
    private Customer customer;

    private String password;
    private Integer hash_round;

    @Enumerated(EnumType.ORDINAL)
    private Permission permission;
}
