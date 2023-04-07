package com.benkyousuru.pbl03api.model.entity;

import java.util.ArrayList;
import java.util.List;

import com.benkyousuru.pbl03api.model.model.CategoryModel;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;

    private Integer parentId;

    private String categoryName;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Builder.Default
    private List<Category> subcategories = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Builder.Default
    private List<Product> products = new ArrayList<>();

    public Category(CategoryModel category) {
        this.categoryId = category.getCategoryId();
        this.categoryName = category.getCategoryName();
        if(this.subcategories == null)
            this.subcategories = new ArrayList<>();
        if(this.products == null)
            this.products = new ArrayList<>();
        if(category.getSubcategories() != null) {
            this.subcategories.clear();
            category.getSubcategories().forEach(e -> addSubcategory(new Category(e)));
        }
        if(category.getProducts() != null) {
            this.products.clear();
            category.getProducts().forEach(e -> addProduct(new Product(e)));
        }
    }

    public void addSubcategory(Category subCategory) {
        this.subcategories.add(subCategory);
    }

    public void addProduct(Product product) {
        this.products.add(product);
        product.setCategory(this);
    }
}
