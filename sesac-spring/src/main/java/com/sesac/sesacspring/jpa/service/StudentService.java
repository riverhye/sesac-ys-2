package com.sesac.sesacspring.jpa.service;

import com.sesac.sesacspring.jpa.dto.StudentDTO;
import com.sesac.sesacspring.jpa.entity.Student;
import com.sesac.sesacspring.jpa.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository; // mybatis 에서 mapper 가 DB 연결했듯이, JPA 에서는 repository

    public List<StudentDTO> getStudentAll(){
        // repository 에 있던 '대상으로 지정할 entity' 타입으로 받음
        List<Student> result = studentRepository.findAll();
        List<StudentDTO> students = new ArrayList<>();

        for(Student student:result) {
            // === Builder ===
            // 의존성 주입 방법
            // 1) 생성자 주입 : 필드가 여럿이면 순서를 지켜야 한다 (like. JS의 매개변수 순서) -> 명시적이지 못함
            // => 이를 해결하고자 builder 등장
            // 2) setter : 필드 개수만큼 메서드 추가
            StudentDTO studentDTO = StudentDTO.builder() // new Builder
                    .name(student.getName())
                    .nickname(student.getNickname()) // 필드 지정 후 값을 넣는 방식 -> 순서 중요 X
                    .build(); // new 키워드처럼 생성해 줌
            // StudentDTO studentDTO = new StudentDTO();
            // studentDTO.setName("이름")
            students.add(studentDTO);
        }

        return students;
    }
}
