package com.benkyousuru.pbl03api.model.service.implement;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Customer;
import com.benkyousuru.pbl03api.model.entity.LoginDetail;
import com.benkyousuru.pbl03api.model.entity.LoginSession;
import com.benkyousuru.pbl03api.model.entity.Permission;
import com.benkyousuru.pbl03api.model.model.CustomerModel;
import com.benkyousuru.pbl03api.model.model.LoginRequest;
import com.benkyousuru.pbl03api.model.model.LoginResponse;
import com.benkyousuru.pbl03api.model.model.RegisterRequest;
import com.benkyousuru.pbl03api.model.repository.CustomerRepository;
import com.benkyousuru.pbl03api.model.repository.LoginDetailRepository;
import com.benkyousuru.pbl03api.model.repository.LoginSessionRepository;
import com.benkyousuru.pbl03api.model.service.IAuthenticationService;
import com.benkyousuru.pbl03api.model.service.IPasswordEncoder;
import com.benkyousuru.pbl03api.model.service.implement.utils.TokenGenerator;

@Service
public class AuthenticationService implements IAuthenticationService {
    @Autowired
    private TokenGenerator tokenGenerator;

    @Autowired
    private IPasswordEncoder passwordEncoder;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private LoginDetailRepository loginDetailRepository;

    @Autowired
    private LoginSessionRepository loginSessionRepository;

    @Override
    public CustomerModel register(RegisterRequest request) {
        CustomerModel customer = customerService.insert(request.getCustomer());
        setPassword(customer.getCustomerId(), request.getPassword());
        setPermission(customer.getCustomerId(), Permission.CUSTOMER);
        return customer;
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        if(request.logginInByEmail()) {
            List<Customer> customers = customerRepository.findByEmail(request.getEmail());
            if(customers.size() < 1)
                return null;
            Customer customer = customers.get(0);
            LoginDetail detail = customer.getLoginDetail();

            // System.out.println(request.getPassword() + " " + detail.getPassword());
            boolean valuate = passwordEncoder.check(request.getPassword(), detail.getPassword());
            // System.out.println(valuate);
            if(!valuate)
                return null;
            
            String token = tokenGenerator.genToken(customer.getCustomerId().toString() + Date.from(Instant.now()));
            LoginSession session = LoginSession.builder()
            .customer(customer)
            .token(token)
            .dateCreated(Date.from(Instant.now()))
            .permission(detail.getPermission())
            .build();
            loginSessionRepository.save(session);
            return new LoginResponse(new CustomerModel(customer), token, detail.getPermission());
        } else if(request.logingInByToken()) {
            Optional<LoginSession> session = loginSessionRepository.findById(request.getToken());
            if(session.isEmpty())
                return null;
            return new LoginResponse(new CustomerModel(session.get().getCustomer()), request.getToken(), session.get().getPermission());
        }
        return null;
    }

    @Override
    public void logout(String token) {
        loginSessionRepository.deleteById(token);
    }

    @Override
    public void setPermission(Integer customerId, Permission permission) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        if(customer.isEmpty())
            return;
        LoginDetail detail = customer.get().getLoginDetail();
        detail.setPermission(permission);
        loginDetailRepository.save(detail);
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
}
