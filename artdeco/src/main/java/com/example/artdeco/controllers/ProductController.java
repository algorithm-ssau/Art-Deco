package com.example.artdeco.controllers;

import com.example.artdeco.ProductRepository;
import com.example.artdeco.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    private ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @GetMapping("/product/plaster")
    public ResponseEntity<List<Product>> getPlaster(){
        return ResponseEntity.ok(
                this.productRepository.findByType("PLASTER")
        );

    }

    @GetMapping("/product/fresco")
    public ResponseEntity<List<Product>> getFresco(){
        return ResponseEntity.ok(
                this.productRepository.findByType("FRESCO")
        );

    }

    @GetMapping("/product/paint")
    public ResponseEntity<List<Product>> getPaint(){
        return ResponseEntity.ok(
                this.productRepository.findByType("PAINT")
        );

    }

    @GetMapping("/product/decor")
    public ResponseEntity<List<Product>> getDecor(){
        return ResponseEntity.ok(
                this.productRepository.findByType("DECOR")
        );

    }
    @GetMapping("/product/wallpaper")
    public ResponseEntity<List<Product>> getWallpaper(){
        return ResponseEntity.ok(
                this.productRepository.findByType("WALLPAPER")
        );

    }
}
