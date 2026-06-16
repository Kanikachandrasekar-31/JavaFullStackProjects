package com.example.JavaFullStackProjects;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import jakarta.persistence.OneToMany;

import java.util.List;


@Entity
@Table(name="Students_details")//custom table name
@Data
public class Student {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name="student_id")
    private Long id;
    @Column(name="Student_name",nullable=false,length=100)
    private String name;
    private String department;
    @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name ="profile_id",referencedColumnName = "id")
    private Profile profile;
    //@OneToMany(mappedBy = "student",cascade=CascadeType.ALL)
   // private List<Course> courses;
    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name="student_id")
    private List<Course> courses;
}