package com.example.artdeco.bootstrap;

import com.example.artdeco.ProductRepository;
import com.example.artdeco.ProductType;
import com.example.artdeco.model.Product;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class UploadData implements CommandLineRunner {

    private ProductRepository repository;

    @Autowired
    public UploadData(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        /*repository.deleteAll();

        // save some products
        try {
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Венецианская штукатурка", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/plaster1.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Мраморный эффект", 130.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/plaster1.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Геометрический узор", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/parallax1.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Балясина", 200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/decor1.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Красная краска", 100.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/decor2.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "С животными", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("./src/main/resources/static/img/parallax2.jpg"))), "image/jpeg"));
        } catch (IOException e) {
            e.printStackTrace();
        }*/
        /*repository.save(new Product(ProductType.valueOf("PLASTER"), "Мраморный эффект", 130.0, "..\\img\\marbre.png"));
        repository.save(new Product(ProductType.valueOf("FRESCO"), "Геометрический узор", 1200.0, "..\\img\\geom.png"));
        repository.save(new Product(ProductType.valueOf("DECOR"), "Балясина", 200.0, "..\\img\\balac.png"));
        repository.save(new Product(ProductType.valueOf("PAINT"), "Красная краска", 100.0, "..\\img\\red.png"));
        repository.save(new Product(ProductType.valueOf("WALLPAPER"), "С животными", 1500.0, "..\\img\\animals.png"));*/

        System.out.println("Сервер запущен!");
        /*
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
         */
    }
}
