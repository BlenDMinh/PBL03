package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
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
public class LoginSession {
    @Id
    private String token;

    @OneToOne
    private Customer customer;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCreated;

    @Enumerated(EnumType.ORDINAL)
    private Permission permission;
}
