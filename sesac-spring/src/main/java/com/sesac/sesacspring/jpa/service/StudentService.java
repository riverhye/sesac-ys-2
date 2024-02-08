package com.sesac.sesacspring.jpa.service;

import com.sesac.sesacspring.jpa.dto.StudentDTO;
import com.sesac.sesacspring.jpa.entity.Student;
import com.sesac.sesacspring.jpa.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository; // mybatis 에서 mapper 가 DB 연결했듯이, JPA 에서는 repository

    public List<StudentDTO> getStudentAll(){
        // findAll() : repository 에 있던 '대상으로 지정할 entity' 타입으로 받음
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

    public String insertStudent(String name, String nickname, Student.LoginType type) {
        // 받아온 데이터로 repository 의 save 메서드 호출
        // repository 에 담긴 entity 만 쓸 수 있으므로 거기에 담기
        Student student = Student.builder().name(name).nickname(nickname).loginType(type).build();
        Student newStudent = studentRepository.save(student);
        // newStudent : save 한 후 반환되는 entity 객체

        return newStudent.getId() + newStudent.getName();
    }

    public String searchStudentByName(String name) {
        List<Student> student = studentRepository.findByName(name);
//        return "id: " + student.getId();
        return "해당 이름의 사용자는 " + student.size() + "명입니다.";
    }

    public String searchStudentById(int id) {
        Student student = studentRepository
                .findById(id)
                .orElseThrow(()->new RuntimeException("사용자 없음"));
        // orElse() : 있으면 반환, 없으면 다른 값 반환
        // orElseThrow() : 있으면 반환, 없으면 에러
        return student.getName();

        // 아래처럼 2단계로 나눠서 할 수도 있음

//        Optional<Student> student = studentRepository.findById(id);
        // Optional<T> : null 일 수도 있는 객체를 감싸는 wrapper class
        // Java 8부터 등장
        // ex. 해당 id가 없어서 null 을 반환했을 때 그 값의 getName()을 하는 상황 방지
//        if( student.isPresent() ) {
//            // isPresent() : 객체 여부를 boolean 으로 반환
//            return student.get().getName();
//            // get : Optional 에 담긴 객체 반환
//        }
//        return student.get().getName(); // get()으로 꺼내고, 원하는 작업

        // ======== 결론 ========
        // Optional : 단일값 처리
        // List : 다중값 처리
    }

    // count 메서드에서는 long 타입으로 반환하지만, 같은 정수형이므로 int OK
    public long countByNickname(String nickname) {
        return studentRepository.countByNickname(nickname);
    }

    public String updateStudent(int id, String name) {
        // save(T) : 새 entity insert or 기존 entity update
        // T의 기본값(PK) 상태에 따라 다르게 동작
        // PK 값이 존재하는 경우 : PK와 연결된 entity update
        // PK 값이 없는 경우 : 새 entity insert

        // 0. 기존 entity 가져오기
        // entity 에 담긴 값을 그대로 저장하므로 일부 필드 설정 안 하면 NULL 값이 됨
        // => 원래 객체 가져오는 과정 필요
        // 기존 객체는 바뀌지 않아야 하므로(VO) 아래에서 새 객체 생성
        Student student = studentRepository.findById(id)
                                            .orElseThrow(()->new NoSuchElementException("no existed id"));

       // 1. entity 생성 (save 동작 시 필요하니까)
       Student updatedStudent = Student.builder().id(id).name(name).nickname(student.getNickname()).loginType(student.getLoginType()).build();
       // 2. Repository 를 통해 DB에 반영
       studentRepository.save(updatedStudent);

       return "Updated Success!";

        // save 하는 게 repo 에 접근하는 것
    }
}