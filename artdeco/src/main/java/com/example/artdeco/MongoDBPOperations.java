/*package com.example.artdeco;

import com.example.artdeco.model.Product;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import java.util.ArrayList;
import java.util.List;

public class MongoDBPOperations {
    public List<Product> getProducts(MongoOperations mongoOperation, String criteria, String value){
        Query searchProduct = new Query(Criteria.where(criteria).is(value));
        List<Product> products = mongoOperation.find(searchProduct,Product.class);
        System.out.println("Found!");
        for (Product p:products){
            System.out.println(p);
        }
        return products;
    }
    public void addProduct(MongoOperations mongoOperation, Product product){
        mongoOperation.save(product);
        System.out.println("Product saved successfully!");
    }
    public void removeProduct(MongoOperations mongoOperation, String criteria, String value){
        Query searchProduct = new Query(Criteria.where(criteria).is(value));
        mongoOperation.remove(searchProduct, Product.class);
        System.out.println("Some products were removed");
    }
    public void updateProduct(MongoOperations mongoOperation, String criteria, String value, String updateCriteria, String updateValue) {
        Query searchProduct = new Query(Criteria.where(criteria).is(value));
        mongoOperation.updateMulti(searchProduct, Update.update(updateCriteria, updateValue), Product.class);
        System.out.println("Products were updated");
    }
}
*/