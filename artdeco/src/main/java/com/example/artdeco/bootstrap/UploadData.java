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

        //repository.deleteAll();
/*
        // save some products
        try {
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Венецианская штукатурка", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\venec.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Под старину", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\starina.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Простой узор", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\casual.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Крупные мазки", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\krup_maz.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Под мрамор", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\mramor.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PLASTER"), "Под мрамор", 150.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\штукатурка\\mramor2.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Цветочный узор", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\flowers.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Геометрический узор", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\geom.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Карта", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\karty.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Космос", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\kosmos.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Пейзаж", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\peyzaj.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("FRESCO"), "Тропики", 1200.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\фрески\\tropiki.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Колонна", 32000.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\column.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Камин", 25300.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\kamin.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Карниз", 650.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\karniz.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Плинтус", 1050.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\plintus.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Розетка", 580.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\rosetka.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("DECOR"), "Угловой элемент", 580.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\декор\\ugl_elem.png"))), "image/png"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Красная краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\red.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Желтая краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\yellow.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Зеленая краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\green.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Синяя краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\blue.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Оранжевая краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\orange.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("PAINT"), "Розовая краска", 500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\краска\\pink.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Геометрический узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\geom.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Цветочный узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\flowers.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Геометрический узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\geom2.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Классический узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\lines.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Природный узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\nature.jpg"))), "image/jpeg"));
            repository.save(new Product(ProductType.valueOf("WALLPAPER"), "Природный узор", 1500.0, new Binary(BsonBinarySubType.BINARY, Files.readAllBytes(Path.of("C:\\Users\\Irina\\Desktop\\Ира\\сгау\\эвм\\сайт\\обои\\trees.jpg"))), "image/jpeg"));
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
