package com.benkyousuru.pbl03api.model.service.implement;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
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
    @Value("${app.product_image_path}")
    private String PRODUCT_RESOURCE_PATH;
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
    public ProductModel insert(ProductModel model) {
        Optional<Product> product = productRepository.findById(model.getSku());
        if (product.isPresent())
            throw new RuntimeException("Product with id = " + model.getSku().toString() + " is already presented");
        Product retProduct = productRepository.save(new Product(model));
        return new ProductModel(retProduct);
    }

    @Override
    public ProductModel update(ProductModel model) {
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
        if (n_Product.getQuantity() == null)
            n_Product.setQuantity(o_Product.getQuantity());
        Product retProduct = productRepository.save(n_Product);
        return new ProductModel(retProduct);
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

    @Override
    public byte[] getImageById(int productId) throws IOException  {
        try(InputStream imageStream = new FileInputStream(PRODUCT_RESOURCE_PATH + "/" + productId + ".jpg")) {
            byte[] image = IOUtils.toByteArray(imageStream);
            imageStream.close();
            return image;
        } catch(Exception e) {
            e.printStackTrace();
        }
        Resource nullImageResource = new ClassPathResource("null.jpg");
        InputStream nullStream = nullImageResource.getInputStream();
        byte[] nullImage = IOUtils.toByteArray(nullStream);
        nullStream.close();
        return nullImage;
    }
}
