package com.benkyousuru.pbl03api.model.entity;

import java.util.List;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.model.CategoryModel;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer categryId;

    private String categoryName;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Category> subcategories;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Product> products;

    public Category(CategoryModel category) {
        this.categryId = category.getCategryId();
        this.categoryName = category.getCategoryName();
        if(category.getSubcategories() != null)
            this.subcategories = category.getSubcategories().stream().map(e -> new Category(e)).collect(Collectors.toList());
        if(category.getProducts() != null)
            this.products = category.getProducts().stream().map(e -> new Product(e)).collect(Collectors.toList());
    }
}
