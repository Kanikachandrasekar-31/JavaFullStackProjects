package com.example.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentAndCourse {

    @Autowired
    Controller c1;
    @Autowired
    Controller2 c2;
    @GetMapping("/studentandcourse")
    public String sana(){
        String stu=c1.name();
        String c=c2.course();
        return stu + " " +c;
    }


}
