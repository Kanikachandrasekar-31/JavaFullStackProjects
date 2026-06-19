package com.example.FrontBackendWithReact;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceController {

    public String Multiplication(int a){
        var res=" ";
        for(var i=1;i<=10;i++){
       res += "\n" + (i + "*" +  a  + " = " + (i*a));

        }
        return res;
    }

}
