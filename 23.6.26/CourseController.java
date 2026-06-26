//package com.example.Course;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.client.RestTemplate;
//
//@RestController
//public class CourseController {
//    @GetMapping("/course")
//    public String saycourse(){
//        return "course number:101";
//    }
//    @GetMapping("/student-course")
//    public String getStudentCourse(){
//        RestTemplate restTemplate = new RestTemplate();
//        String student = restTemplate.getForObject("http://localhost:8081/student",String.class);
//        return student + saycourse();
//    }
//}
