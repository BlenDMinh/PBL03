package com.benkyousuru.pbl03api.model.model;

import java.util.List;
import java.util.stream.Collectors;

import com.benkyousuru.pbl03api.model.entity.Category;

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
public class CategoryModel {
    private Integer categoryId;
    private String categoryName;
    private List<CategoryModel> subcategories;
    private List<ProductModel> products;
    public CategoryModel(Category category) {
        this.categoryId = category.getCategoryId();
        this.categoryName = category.getCategoryName();
        if(category.getSubcategories() != null)
            this.subcategories = category.getSubcategories().stream().map(e -> new CategoryModel(e)).collect(Collectors.toList());
        if(category.getProducts() != null)
            this.products = category.getProducts().stream().map(e -> new ProductModel(e, true)).collect(Collectors.toList());
    }
}
