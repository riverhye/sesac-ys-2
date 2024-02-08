package com.sesac.sesacspring.jpa.repository;

import com.sesac.sesacspring.jpa.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    // JpaRepository<대상으로 지정할 entity, 해당 entity's PK type>

    // PK를 제외한 필드는 여기서 메서드 정의해야 사용 가능
    // 방법 1. JPA 기본 규칙 따르기
    // --- find 메서드 정의
    // - findBy컬럼명
    List<Student> findByName(String name);
    // PK, unique key 처럼 결과가 반드시 1개일 때는 하나로 받고, 그외엔 객체로 받아주기

    // - 그외
    List<Student> findByNameAndNickname(String name, String nickname); // 이름 and 닉네임 일치 경우
    List<Student> findByNameOrNickname(String name, String nickname); // 이름 or 닉네임 일치 경우
    // findByAgeGreaterThanEqual(int age) // age >= 값
    // => JPA 장점 1) 메서드 정의해주면 쓸 수 있음 2) 메서드명만 봐도 어떤 동작인지 유추 가능

    // 방법 2. 직접 쿼리를 작성해서 연결
//    @Query("select s from Student s where s.name = :a") // JPA 규칙으로 쿼리
    @Query(nativeQuery = true, value="select * from student where name = :a") // 네이티브 쿼리
    List<Student> findTest(String a);

    // 일치하는 닉네임 찾기 : count
    long countByNickname(String nickname);

//    @Query("update Student s set s.name = :student.name where s.id = :student.id")
//    List<Student> updateName(Student student);
}
