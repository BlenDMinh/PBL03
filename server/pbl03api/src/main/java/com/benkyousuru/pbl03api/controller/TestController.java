package com.benkyousuru.pbl03api.controller;

import java.time.Instant;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.entity.Order;
import com.benkyousuru.pbl03api.model.entity.Status;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;
import com.benkyousuru.pbl03api.model.repository.OrderRepository;

@RestController
public class TestController {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/")
    public String F() {
        // customerRepository.save(c);
        return "Saved";
    }

    @GetMapping("/customer/add")
    public String addCus() {
        Customer c = new Customer();
        c.setCustomerId(Long.valueOf(0));
        c.setSex(false);
        c.setEmail("themysmine@gmail.com");
        c.setDateOfBirth(Date.from(Instant.now()));
        Order o = orderRepository.findById(Long.valueOf(0)).get();
        c.addOrder(o);
        customerRepository.save(c);
        return "Saved Customer";
    }

    @GetMapping("/order/add")
    public String addOr() {
        Order o = new Order();
        o.setOrderId(Long.valueOf(0));
        o.setDateCreated(Date.from(Instant.now()));
        o.setStatus(Status.INCOMPLETE);
        orderRepository.save(o);
        return "Saved Order";
    }
}
