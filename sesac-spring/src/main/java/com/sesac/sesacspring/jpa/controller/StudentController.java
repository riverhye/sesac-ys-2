package com.sesac.sesacspring.jpa.controller;

import com.sesac.sesacspring.jpa.dto.StudentDTO;
import com.sesac.sesacspring.jpa.entity.Student;
import com.sesac.sesacspring.jpa.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    // 1. 전체 검색 (select * from student)
    @GetMapping("/all")
    public List<StudentDTO> getAll() {
        // student 목록 전부 가져와서 보여주는 API
        List<StudentDTO> result = studentService.getStudentAll();
        return result;
    }
    // 2. 삽입 (insert into ~~)
    @GetMapping("/insert") // /student/insert?name=이름
    public String insertStudent(@RequestParam String name,
                                @RequestParam String nickname,
                                @RequestParam Student.LoginType type) {

        // enum 은 따로 클래스로 만들어주는 게 좋다.
        // 안 그러면 지금처럼 컨트롤러에서 entity 에 접근해야 하기 때문
        return studentService.insertStudent(name, nickname, type);
    }
    // 3. 조건에 따른 검색 (select * from student where name='')
    @GetMapping("/search/name") // /search/name?name=이름
    public String searchStudentByName(@RequestParam String name) {
        return studentService.searchStudentByName(name);
    }
    // 4. 조건에 따른 검색 (2) (select * from student where id = )
    @GetMapping("/search/id")
    public String searchStudentById(@RequestParam int id) {
        return studentService.searchStudentById(id);
    }

    @GetMapping("/search")
    public String countByNickname(@RequestParam String nickname) {
        return "일치하는 닉네임은 " + studentService.countByNickname(nickname) + "개입니다.";
    }

    @GetMapping("")
    public String updateStudent(@RequestParam int id,
                             @RequestParam String name) {
        return studentService.updateStudent(id, name);
    }

//    @GetMapping("/count")
//    public int getCountAll(){}

//    @GetMapping("/search")
//    public ? getSearch(@RequestBody int id){}
}
