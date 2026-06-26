package com.example.StudentAndCourse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class StudentController {
    private final courseController course;
    public StudentController(courseController course){
        this.course=course;
    }
    @GetMapping("/studentandcourse")


    public String sayStudent(){
        return "student : kanika "+ (course.getCourse() );
    }
}
