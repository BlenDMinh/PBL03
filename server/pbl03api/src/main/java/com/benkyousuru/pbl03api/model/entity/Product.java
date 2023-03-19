package com.benkyousuru.pbl03api.model.entity;

import com.benkyousuru.pbl03api.model.model.ProductModel;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer sku;   
    private String productName;
    
    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;

    private Float listedPrice;
    private String origin;
    private String brand;
    private String ingridients;
    private String userManual;
    private String preservedManual;
    private String description;

    public Product(ProductModel product) {
        this.sku = product.getSku();
        this.productName = product.getProductName();
        this.category = new Category(product.getCategory());
        this.listedPrice = product.getListedPrice();
        this.origin = product.getOrigin();
        this.brand = product.getBrand();
        this.ingridients = product.getIngridients();
        this.userManual = product.getUserManual();
        this.preservedManual = product.getPreservedManual();
        this.description = product.getDescription();
    }
}
