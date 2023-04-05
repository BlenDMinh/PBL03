package com.benkyousuru.pbl03api.model.service;

import java.util.List;

import com.benkyousuru.pbl03api.model.model.ProductModel;

public interface IProductService extends ICrudService<ProductModel, Integer> {
    List<ProductModel> getAll(int pageNumber, int pageSize);
    List<ProductModel> getByCategory(int categoryId, int pageNumber, int pageSize);
}
