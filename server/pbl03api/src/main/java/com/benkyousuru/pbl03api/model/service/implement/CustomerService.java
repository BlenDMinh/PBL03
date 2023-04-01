package com.benkyousuru.pbl03api.model.service.implement;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.entity.LoginDetail;
import com.benkyousuru.pbl03api.model.entity.LoginSession;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;
import com.benkyousuru.pbl03api.model.repository.LoginDetailRepository;
import com.benkyousuru.pbl03api.model.repository.LoginSessionRepository;
import com.benkyousuru.pbl03api.model.service.ICustomerService;
import com.benkyousuru.pbl03api.model.service.IPasswordEncoder;
import com.benkyousuru.pbl03api.model.service.implement.utils.TokenGenerator;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private TokenGenerator tokenGenerator;

    @Autowired
    private IPasswordEncoder passwordEncoder;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private LoginDetailRepository loginDetailRepository;

    @Autowired
    private LoginSessionRepository loginSessionRepository;

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
        Customer sCustomer = new Customer(model);
        LoginDetail detail = new LoginDetail();
        detail.setCustomer(sCustomer);
        sCustomer.setLoginDetail(detail);
        customerRepository.save(sCustomer);
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
        if(n_Customer.getCartProducts() == null)
            n_Customer.setCartProducts(o_Customer.getCartProducts());
        if(n_Customer.getAddresses() == null)
            n_Customer.setAddresses(o_Customer.getAddresses());
        customerRepository.save(n_Customer);
    }

    @Override
    public void delete(CustomerModel model) {
        try {
            customerRepository.delete(new Customer(model));
        } catch(OptimisticLockingFailureException e) {
            throw e;
        }
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public void setPassword(Integer customerId, String password) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        if(customer.isEmpty())
            return;
        
        LoginDetail detail = customer.get().getLoginDetail();
        String hash = passwordEncoder.encrypt(password);
        detail.setPassword(hash);
        loginDetailRepository.save(detail);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        if(request.logginInByEmail()) {
            List<Customer> customers = customerRepository.findByEmail(request.getEmail());
            if(customers.size() < 1)
                return null;
            Customer customer = customers.get(0);
            LoginDetail detail = customer.getLoginDetail();

            System.out.println(request.getPassword() + " " + detail.getPassword());
            boolean valuate = passwordEncoder.check(request.getPassword(), detail.getPassword());
            System.out.println(valuate);
            if(!valuate)
                return null;
            
            String token = tokenGenerator.genToken(customer.getCustomerId().toString() + Date.from(Instant.now()));
            LoginSession session = LoginSession.builder().customer(customer).token(token).dateCreated(Date.from(Instant.now())).build();
            loginSessionRepository.save(session);
            return new LoginResponse(new CustomerModel(customer), token);
        } else if(request.logingInByToken()) {
            Optional<LoginSession> session = loginSessionRepository.findById(request.getToken());
            if(session.isEmpty())
                return null;
            return new LoginResponse(new CustomerModel(session.get().getCustomer()), request.getToken());
        }
        return null;
    }
}