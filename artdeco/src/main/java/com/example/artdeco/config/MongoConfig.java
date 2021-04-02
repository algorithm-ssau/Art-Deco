package com.example.artdeco.config;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
//import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

//import com.mongodb.client.MongoClient;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Collection;
import java.util.Collections;


@Configuration
@EnableMongoRepositories(basePackages = "com.example.artdeco")
public class MongoConfig extends AbstractMongoClientConfiguration {

    @Override
    public String getDatabaseName(){
        return "artdecodb";
    }

   /* @Override
    public MongoClient mongoClient() {

        ConnectionString uri = new ConnectionString(
                "mongodb+srv://ArtDecoUser:ArtDeco123@cluster0.ffhtx.mongodb.net/artdecodb?retryWrites=true&w=majority");
        MongoClientSettings mongoClientSettings = MongoClientSettings.builder().applyConnectionString(uri).build();
        return MongoClients.create(mongoClientSettings);
    }*/

    @Override
    public Collection getMappingBasePackages() {
        return Collections.singleton("com.example.artdeco");
    }


}
