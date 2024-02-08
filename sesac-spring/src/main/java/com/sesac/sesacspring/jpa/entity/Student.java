package com.sesac.sesacspring.jpa.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// Entity :
// 데이터베이스의 필드와 변수의 관계가 정의됨
// DB 테이블에 대응하는 하나의 클래스

// 테이블을 uppercase 로 생성하고 싶을 때 (기본적으로 소문자로 생성)
// 1. application.properties 에 spring.jpa.hibernate.naming.physical-strategy = org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl 작성
// 2. @Table(name="Student")

// DB에 데이터 넣으면 ERR 발생하는 이유 : 각각 필요한 종류의 생성자가 달라서 어떤 걸 선택해야 할지 모름
@Entity // class Student() {} (빈 생성자) 필수!
@Getter
@Builder // 필드 전체가 있는 생성자가 필수!
@NoArgsConstructor // 생성자가 정의됨
@AllArgsConstructor // Builder 를 위한 빈 생성자 생성
public class Student {
    // 방법 1. 직접 생성 : public Student(){}
    // 방법 2. @NoArgsConstructor 사용 -> Builder Err -> @AllArgsConstructor 사용
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT
    private int id;
    // it means : id int primary key auto_increment
    // === strategy ===
    // SEQUENCE : 새 object 를 만들어서 id 부여 (Oracle o MySQL x)
    // TABLE : SEQUENCE 전략을 흉내낸 전략 -> 모든 DBMS 에서 사용 가능

    // NULL, LENGTH
    @Column(name="name", nullable = false, length = 20)
    private String name;
    // => name varchar(20) NOT NULL

    // TEXT TYPE
    @Column(columnDefinition = "TEXT")
    private String nickname;

    // ENUM TYPE
    @Column
    @Enumerated(EnumType.STRING)
    private LoginType loginType; // uppercase 는 _(under bar)가 됨

    public enum LoginType {
        GOOGLE, KAKAO
    }
}
