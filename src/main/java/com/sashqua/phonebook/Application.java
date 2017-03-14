package com.sashqua.phonebook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by sashqua on 3/13/17.
 */
@SpringBootApplication
public class Application  {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }
//
//    @RequestMapping("/index")
//    public String showIndex() {
//        return "index";
//
//    }


}