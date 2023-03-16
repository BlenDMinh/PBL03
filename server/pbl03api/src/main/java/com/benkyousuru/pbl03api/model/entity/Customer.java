package com.benkyousuru.pbl03api.model.entity;

import java.util.Date;
import java.util.List;

import jakarta.annotation.Nonnull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.GenerationType;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Nonnull
    private Long CustomerId;

    @Column(name = "Sex", columnDefinition = "BIT")
    @Nonnull
    private Boolean Sex;

    @Nonnull
    private String Email;

    @Temporal(TemporalType.DATE)
    @Nonnull
    private Date DateOfBirth;

    @Nonnull
    private String _Password;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Order> Orders;

    public Long getCustomerId() {
        return CustomerId;
    }
    public void setCustomerId(Long customerId) {
        CustomerId = customerId;
    }

    public Boolean getSex() {
        return Sex;
    }

    public void setSex(Boolean sex) {
        Sex = sex;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Date getDateOfBirth() {
        return DateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        DateOfBirth = dateOfBirth;
    }

    public void set_Password(String _Password) {
        this._Password = _Password;
    }

    public List<Order> getOrders() {
        return Orders;
    }

    public void addOrder(Order o) {
        Orders.add(o);
    }

    public void removeOrder(Order o) {
        Orders.remove(o);
    }
}
