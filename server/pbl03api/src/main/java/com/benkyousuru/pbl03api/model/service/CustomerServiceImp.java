package com.benkyousuru.pbl03api.model.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import com.benkyousuru.pbl03api.model.entity.Address;
import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;

public class CustomerServiceImp implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerModel> getAll() {
        return ((List<Customer>) customerRepository.findAll()).stream().map(e -> new CustomerModel(e)).collect(Collectors.toList());
    }

    @Override
    public Optional<CustomerModel> get(Integer id) {
        Optional<Customer> c = customerRepository.findById(id);
        if(!c.isPresent())
            return Optional.empty();
        return Optional.of(new CustomerModel(c.get()));
    }

    @Override
    public void insert(CustomerModel customer) {
        Customer c = Customer.builder()
            .customerName(customer.getCustomerName())
            .dateOfBirth(customer.getDateOfBirth())
            .email(customer.getEmail())
            .homeAddress(
                Address.builder()
                .build()
            )
            .build();
        customerRepository.save(c);
    }

    @Override
    public void delete(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }
    
}
