package com.benkyousuru.pbl03api.model.service.implement;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import com.benkyousuru.pbl03api.model.entity.Category;
import com.benkyousuru.pbl03api.model.model.CategoryModel;
import com.benkyousuru.pbl03api.model.repository.CategoryRepository;
import com.benkyousuru.pbl03api.model.service.ICategoryService;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<CategoryModel> getAll() {
        List<Category> categories = (List<Category>) categoryRepository.findAll();
        List<CategoryModel> categoryModels = new ArrayList<>();
        for(Category category : categories)
            categoryModels.add(new CategoryModel(category));
        return categoryModels;
    }

    @Override
    public Optional<CategoryModel> getById(Integer id) {
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isEmpty())
            return Optional.empty();
        return Optional.of(new CategoryModel(category.get()));
    }

    @Override
    public void insert(CategoryModel model) {
        Optional<Category> category = categoryRepository.findById(model.getCategoryId());
        if (category.isPresent())
            throw new RuntimeException("Category with id = " + model.getCategoryId().toString() + " is already presented");
        categoryRepository.save(new Category(model));    
    }

    @Override
    public void update(CategoryModel model) {
        Optional<Category> category = categoryRepository.findById(model.getCategoryId());
        if (category.isEmpty())
            throw new RuntimeException("Category with id = " + model.getCategoryId().toString() + " does not exist!");
        Category o_Category = category.get();
        Category n_Category = new Category(model);
        if (n_Category.getCategoryName() == null)
            n_Category.setCategoryName(o_Category.getCategoryName());
        if (n_Category.getCategoryId() == null)
            n_Category.setCategoryId(o_Category.getCategoryId());
        if (n_Category.getProducts() == null)
            n_Category.setProducts(o_Category.getProducts());
        if (n_Category.getSubcategories() == null)
            n_Category.setSubcategories(o_Category.getSubcategories());
        categoryRepository.save(n_Category);
    }

    @Override
    public void delete(CategoryModel model) {
        try {
            categoryRepository.delete(new Category(model));
        } catch (OptimisticLockingFailureException e) {
            // Object is not present in database
        }
    }

    @Override
    public void deleteById(Integer id) {
        categoryRepository.deleteById(id);
    }
    
}
