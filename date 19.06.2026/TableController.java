package com.example.FrontBackendWithReact;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TableController {
    private final ServiceController service;
    TableController(ServiceController service){
        this.service=service;
    }

    @GetMapping("/tables/{a}")
    public String SayTables(@PathVariable int a){

            return service.Multiplication(a);
        }
    }


