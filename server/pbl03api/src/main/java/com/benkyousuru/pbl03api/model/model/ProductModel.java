package com.benkyousuru.pbl03api.model.model;

import com.benkyousuru.pbl03api.model.entity.Product;

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
public class ProductModel {
    private Integer sku;   
    private String productName;
    
    private Float listedPrice;
    private String origin;
    private String brand;
    private String ingridients;
    private String userManual;
    private String preservedManual;
    private String description;
    private Integer quantity;
    public ProductModel(Product product) {
        this.sku = product.getSku();
        this.productName = product.getProductName();
        this.listedPrice = product.getListedPrice();
        this.origin = product.getOrigin();
        this.brand = product.getBrand();
        this.ingridients = product.getIngridients();
        this.userManual = product.getUserManual();
        this.preservedManual = product.getPreservedManual();
        this.description = product.getDescription();
        this.quantity = product.getQuantity();
    }

    public ProductModel(Product product, boolean chainFromCategory) {
        this.sku = product.getSku();
        this.productName = product.getProductName();
        this.listedPrice = product.getListedPrice();
        this.origin = product.getOrigin();
        this.brand = product.getBrand();
        this.ingridients = product.getIngridients();
        this.userManual = product.getUserManual();
        this.preservedManual = product.getPreservedManual();
        this.description = product.getDescription();
        this.quantity = product.getQuantity();
    }
}
