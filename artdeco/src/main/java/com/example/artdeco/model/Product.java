package com.example.artdeco.model;

import com.example.artdeco.ProductType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Product {
    public Product(ProductType type, String name, double price, String imgPath ){
        this.type = type;
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
    }

    @Id
    private String id;
    String name;
    String imgPath;
    double price;
    ProductType type;

    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public String getImgPath(){
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString(){
        return String.format("Product [id=%d, type=%s, name=%s, price=%.2f, imgPath=%s]", id, type.name(), name, price, imgPath);
    }
}
