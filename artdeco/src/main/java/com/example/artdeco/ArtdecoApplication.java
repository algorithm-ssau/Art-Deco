package com.example.artdeco;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ArtdecoApplication {

	private ProductRepository repository;

	public static void main(String[] args) {

		SpringApplication.run(ArtdecoApplication.class, args);
	}


}
