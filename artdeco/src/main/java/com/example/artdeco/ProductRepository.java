package com.example.artdeco;

import com.example.artdeco.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    public List<Product> findByType(String type);
}
