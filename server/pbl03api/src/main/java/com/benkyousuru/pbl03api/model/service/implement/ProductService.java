package com.benkyousuru.pbl03api.model.service.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Category;
import com.benkyousuru.pbl03api.model.entity.Product;
import com.benkyousuru.pbl03api.model.model.ProductModel;
import com.benkyousuru.pbl03api.model.repository.CategoryRepository;
import com.benkyousuru.pbl03api.model.repository.ProductRepository;
import com.benkyousuru.pbl03api.model.service.IProductService;

@Service
public class ProductService implements IProductService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductModel> getAll() {
        return new ArrayList<>();
    }

    @Override
    public List<ProductModel> getAll(int pageNumber, int pageSize) {
        List<Product> products = productRepository.findAll(PageRequest.of(pageNumber, pageSize)).toList();
        List<ProductModel> productModels = new ArrayList<>();
        for(Product product : products)
            productModels.add(new ProductModel(product));
        return productModels;
    }

    @Override
    public Optional<ProductModel> getById(Integer id) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isEmpty())
            return Optional.empty();
        return Optional.of(new ProductModel(product.get()));
    }

    @Override
    public List<ProductModel> getByCategory(int categoryId, int pageNumber, int pageSize) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if(category.isEmpty())
            return new ArrayList<>();
        return productRepository.findAllByCategory(category.get(), PageRequest.of(pageNumber, pageSize)).stream().map(e -> new ProductModel(e)).toList();
    }

    @Override
    public void insert(ProductModel model) {
        Optional<Product> product = productRepository.findById(model.getSku());
        if (product.isPresent())
            throw new RuntimeException("Product with id = " + model.getSku().toString() + " is already presented");
        productRepository.save(new Product(model));
    }

    @Override
    public void update(ProductModel model) {
        Optional<Product> product = productRepository.findById(model.getSku());
        if (product.isEmpty())
            throw new RuntimeException("Product with id = " + model.getSku().toString() + " does not exist!");
        Product o_Product = product.get();
        Product n_Product = new Product(model);
        if (n_Product.getBrand() == null)
            n_Product.setBrand(o_Product.getBrand());
        if (n_Product.getDescription() == null)
            n_Product.setDescription(o_Product.getDescription());
        if (n_Product.getIngridients() == null)
            n_Product.setIngridients(o_Product.getIngridients());
        if (n_Product.getListedPrice() == null)
            n_Product.setListedPrice(o_Product.getListedPrice());
        if (n_Product.getOrigin() == null)
            n_Product.setOrigin(o_Product.getOrigin());
        if (n_Product.getPreservedManual() == null)
            n_Product.setPreservedManual(o_Product.getPreservedManual());
        if (n_Product.getProductName() == null)
            n_Product.setProductName(o_Product.getProductName());
        if (n_Product.getSku() == null)
            n_Product.setSku(o_Product.getSku());
        if (n_Product.getUserManual() == null)
            n_Product.setUserManual(o_Product.getUserManual());
        productRepository.save(n_Product);
    }

    @Override
    public void delete(ProductModel model) {
        try {
            productRepository.delete(new Product(model));
        } catch (OptimisticLockingFailureException e) {
            // Object is not present in database
        }
    }

    @Override
    public void deleteById(Integer id) {
        productRepository.deleteById(id);
    }
}
