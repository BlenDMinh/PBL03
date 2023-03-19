package com.benkyousuru.pbl03api.model.service;

import java.util.List;
import java.util.Optional;

public interface ICrudService<TModel, TPrimary> {
    List<TModel> getAll();
    Optional<TModel> getById(TPrimary id);
    void insert(TModel model);
    void update(TModel model);
    void delete(TModel model);
    void deleteById(TPrimary id);
}