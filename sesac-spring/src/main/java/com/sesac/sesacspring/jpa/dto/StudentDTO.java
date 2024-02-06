package com.sesac.sesacspring.jpa.dto;

import lombok.Builder;
import lombok.Getter;

@Builder // builder 로 값 주입
@Getter
public class StudentDTO {
    private String name;
    private String nickname;
}
