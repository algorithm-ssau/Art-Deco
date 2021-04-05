package com.example.artdeco.bootstrap;

import com.example.artdeco.ProductRepository;
import com.example.artdeco.ProductType;
import com.example.artdeco.model.Product;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UploadData implements CommandLineRunner {

    private ProductRepository repository;

    public UploadData(ProductRepository repository) {
        this.repository = repository;
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
