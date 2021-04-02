package com.example.artdeco;

import com.example.artdeco.config.MongoConfig;
import com.example.artdeco.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;

@SpringBootApplication
public class ArtdecoApplication implements CommandLineRunner{

	@Autowired
	private ProductRepository repository;

	public static void main(String[] args) {
/*
		ApplicationContext ctx = new AnnotationConfigApplicationContext(MongoConfig.class);
		MongoOperations mongoOperation = (MongoOperations) ctx.getBean("mongoTemplate");
		MongoDBPOperations ops = new MongoDBPOperations();

		Product pl1 = new Product(ProductType.valueOf("PLASTER"), "Венецианская штукатурка", 150.0, "..\\img\\venec.png");
		Product pl2 = new Product(ProductType.valueOf("PLASTER"), "Мраморный эффект", 130.0, "..\\img\\marbre.png");
		Product fr1 = new Product(ProductType.valueOf("FRESCO"), "Геометрический узор", 1200.0, "..\\img\\geom.png");

		ops.addProduct(mongoOperation,pl1);
		ops.addProduct(mongoOperation,pl2);
		ops.addProduct(mongoOperation,fr1);

		ops.getProducts(mongoOperation, "type", "PLASTER");
		ops.getProducts(mongoOperation, "type", "FRESCO");
*/
		SpringApplication.run(ArtdecoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save some products
		repository.save(new Product(ProductType.valueOf("PLASTER"), "Венецианская штукатурка", 150.0, "..\\img\\venec.png"));
		repository.save(new Product(ProductType.valueOf("PLASTER"), "Мраморный эффект", 130.0, "..\\img\\marbre.png"));
		repository.save(new Product(ProductType.valueOf("FRESCO"), "Геометрический узор", 1200.0, "..\\img\\geom.png"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Product product : repository.findAll()) {
			System.out.println(product);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Products found with findByType(PLASTER):");
		System.out.println("--------------------------------");
		for (Product product : repository.findByType("PLASTER")) {
			System.out.println(product);
		}

	}

}
