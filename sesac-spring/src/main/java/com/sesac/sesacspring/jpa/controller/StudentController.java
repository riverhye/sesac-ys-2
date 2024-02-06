package com.sesac.sesacspring.jpa.controller;

import com.sesac.sesacspring.jpa.dto.StudentDTO;
import com.sesac.sesacspring.jpa.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

//    @GetMapping("/count")
//    public int getCountAll(){}

    @GetMapping("/all")
    public List<StudentDTO> getAll(){
        // student 목록 전부 가져와서 보여주는 API
        return studentService.getStudentAll();
    }

//    @GetMapping("/search")
//    public ? getSearch(@RequestBody int id){}
}
