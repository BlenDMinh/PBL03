package com.benkyousuru.pbl03api.model.service.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Order;
import com.benkyousuru.pbl03api.model.entity.Product;
import com.benkyousuru.pbl03api.model.model.OrderModel;
import com.benkyousuru.pbl03api.model.repository.OrderRepository;
import com.benkyousuru.pbl03api.model.repository.ProductRepository;
import com.benkyousuru.pbl03api.model.service.IOrderService;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<OrderModel> getAll() {
        List<Order> orders = (List<Order>) orderRepository.findAll();
        List<OrderModel> orderModels = new ArrayList<>();
        for(Order order : orders)
            orderModels.add(new OrderModel(order));
        return orderModels;
    }

    @Override
    public Optional<OrderModel> getById(Integer id) {
        Optional<Order> order = orderRepository.findById(id);
        if(order.isEmpty())
            return Optional.empty();
        return Optional.of(new OrderModel(order.get()));
    }

    @Override
    public OrderModel insert(OrderModel model) {
        Optional<Order> order = orderRepository.findById(model.getOrderId());
        if (order.isPresent())
            throw new RuntimeException("Order with id = " + model.getOrderId().toString() + " is already presented");
        
        Order retOrder = orderRepository.save(new Order(model));
        for (Product product : retOrder.getProducts()) {
            Optional<Product> oEntityProduct = productRepository.findById(product.getSku());
            if (oEntityProduct.isEmpty())
                throw new RuntimeException("loi update");
            Product eProduct = oEntityProduct.get();
            eProduct.setQuantity(eProduct.getQuantity() - 1);
            productRepository.save(eProduct);   
        }
        return new OrderModel(retOrder);
    }

    @Override
    public OrderModel update(OrderModel model) {
        Optional<Order> order = orderRepository.findById(model.getOrderId());
        if (order.isEmpty())
            throw new RuntimeException("Order with id = " + model.getOrderId().toString() + " does not exist!");
        Order o_Order = order.get();
        Order n_Order = new Order(model);
        if (n_Order.getAddress() == null)
            n_Order.setAddress(o_Order.getAddress());
        if (n_Order.getDateCompleted() == null)
            n_Order.setDateCompleted(o_Order.getDateCompleted());
        if (n_Order.getDateCreated() == null)
            n_Order.setDateCreated(o_Order.getDateCreated());
        if (n_Order.getOrderId() == null)
            n_Order.setOrderId(o_Order.getOrderId());
        if (n_Order.getProducts() == null)
            n_Order.setProducts(o_Order.getProducts());
        if (n_Order.getStatus() == null)
            n_Order.setStatus(o_Order.getStatus());
        Order retOrder = orderRepository.save(n_Order);
        return new OrderModel(retOrder);
    }

    @Override
    public void delete(OrderModel model) {
        try {
            orderRepository.delete(new Order(model));
        } catch (OptimisticLockingFailureException e) {
            // Object is not present in database
        }
    }

    @Override
    public void deleteById(Integer id) {
        orderRepository.deleteById(id);
    }
}
