package com.sesac.sesacspring.mybatis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
    private int id;
    private String title, content, writer, registered;
    private int no;
}