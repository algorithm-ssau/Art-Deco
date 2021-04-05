package com.example.artdeco;


import com.example.artdeco.model.Product;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;


//@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class})
@SpringBootApplication
public class ArtdecoApplication {

//	@Autowired
	private ProductRepository repository;

	public static void main(String[] args) {

		SpringApplication.run(ArtdecoApplication.class, args);
	}


}
