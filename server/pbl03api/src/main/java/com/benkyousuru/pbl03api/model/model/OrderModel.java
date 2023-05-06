package com.benkyousuru.pbl03api.model.model;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.entity.Order;
import com.benkyousuru.pbl03api.model.entity.Status;

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
public class OrderModel {
    private Integer orderId;
    private AddressModel address;
    private Date dateCreated;
    private Date dateCompleted;
    private Status status;
    private List<ProductModel> products;
    public OrderModel(Order order) {
        this.orderId = order.getOrderId();
        if(order.getAddress() != null)
            this.address = new AddressModel(order.getAddress());
        this.dateCreated = order.getDateCreated();
        this.dateCompleted = order.getDateCompleted();
        this.status = order.getStatus();
        if(order.getProducts() != null)
            this.products = order.getProducts().stream().map(e -> new ProductModel(e)).collect(Collectors.toList());
    }
}
