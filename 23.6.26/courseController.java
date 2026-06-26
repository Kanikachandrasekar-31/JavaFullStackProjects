package com.example.StudentAndCourse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class courseController {
    @GetMapping("/course")
    public String getCourse(){
        return "enrolled for english";

    }
}
