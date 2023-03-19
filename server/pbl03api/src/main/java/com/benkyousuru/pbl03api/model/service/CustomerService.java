package com.benkyousuru.pbl03api.model.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<CustomerModel> getAll() {
        return ((List<Customer>) customerRepository.findAll()).stream().map(e -> new CustomerModel(e)).collect(Collectors.toList());
    }

    @Override
    public Optional<CustomerModel> getById(Integer id) {
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isEmpty())
            return Optional.empty();
        return Optional.of(new CustomerModel(customer.get()));
    }

    @Override
    public void insert(CustomerModel model) throws RuntimeException {
        Optional<Customer> customer = customerRepository.findById(model.getCustomerId());
        if(customer.isPresent())
            throw new RuntimeException("Customer with id = " + model.getCustomerId().toString() + " is already presented!");
        customerRepository.save(new Customer(model));
    }

    @Override
    public void update(CustomerModel model) {
        Optional<Customer> customer = customerRepository.findById(model.getCustomerId());
        if(customer.isEmpty())
            throw new RuntimeException("Customer with id = " + model.getCustomerId().toString() + " does not exist!");
        Customer o_Customer = customer.get();
        Customer n_Customer = new Customer(model);
        if(n_Customer.getCustomerId() == null)
            n_Customer.setCustomerId(o_Customer.getCustomerId());
        if(n_Customer.getCustomerName() == null)
            n_Customer.setCustomerName(o_Customer.getCustomerName());
        if(n_Customer.getGender() == null)
            n_Customer.setGender(o_Customer.getGender());
        if(n_Customer.getEmail() == null)
            n_Customer.setEmail(o_Customer.getEmail());
        if(n_Customer.getDateOfBirth() == null)
            n_Customer.setDateOfBirth(o_Customer.getDateOfBirth());
        if(n_Customer.getHomeAddress() == null)
            n_Customer.setHomeAddress(o_Customer.getHomeAddress());
        if(n_Customer.getCartProducts() == null)
            n_Customer.setCartProducts(o_Customer.getCartProducts());
        if(n_Customer.getDeliveryAddresses() == null)
            n_Customer.setDeliveryAddresses(o_Customer.getDeliveryAddresses());
        customerRepository.save(n_Customer);
    }

    @Override
    public void delete(CustomerModel model) {
        try {
            customerRepository.delete(new Customer(model));
        } catch(OptimisticLockingFailureException e) {
            // Object is not present in database
        }
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }   
}