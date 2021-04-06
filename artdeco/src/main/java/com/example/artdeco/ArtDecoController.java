package com.example.artdeco;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//@Controller
public class ArtDecoController {

  //  @GetMapping("/")
    public String mainPage(){
        return "index";
    }
}
