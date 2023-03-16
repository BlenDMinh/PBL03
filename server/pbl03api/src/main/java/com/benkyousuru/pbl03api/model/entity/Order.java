package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Nonnull
    private Long OrderId;

    @Temporal(TemporalType.DATE)
    @Nonnull
    private Date DateCreated;

    @Temporal(TemporalType.DATE)
    private Date DateCompleted;

    @Enumerated(EnumType.ORDINAL)
    @Nonnull
    private Status Status;

    public Long getOrderId() {
        return OrderId;
    }

    public void setOrderId(Long orderId) {
        OrderId = orderId;
    }

    public Date getDateCreated() {
        return DateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        DateCreated = dateCreated;
    }

    public Date getDateCompleted() {
        return DateCompleted;
    }

    public void setDateCompleted(Date dateCompleted) {
        DateCompleted = dateCompleted;
    }

    public Status getStatus() {
        return Status;
    }

    public void setStatus(Status status) {
        Status = status;
    }
}
