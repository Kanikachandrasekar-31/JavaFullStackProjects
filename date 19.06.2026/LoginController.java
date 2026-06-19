package com.example.FrontBackendWithReact;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @PostMapping("/login")
    public String login(@RequestBody UserLogin login){
        if("kani" .equals(login.getUsername())&& "kani".equals(login.getPassword())){
            return "LOGIN SUCESSFULLY(from backend)";
        }
        else{
            return "LOGIN FAILED";
        }
    }
    static class UserLogin
    {
        private String username;
        private String password;
        public String getUsername(){
            return username;
        }
        public void setUsername(){
            this.username=username;
        }
        public String getPassword(){
            return password;
        }
        public void setPassword(){
            this.password=password;
        }
    }}
