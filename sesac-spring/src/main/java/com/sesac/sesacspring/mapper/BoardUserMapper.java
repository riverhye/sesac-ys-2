package com.sesac.sesacspring.mapper;

import com.sesac.sesacspring.domain.BoardUser;
import com.sesac.sesacspring.dto.BoardUserDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.sql.Timestamp;
import java.util.List;

@Mapper
public interface BoardUserMapper {

    List<BoardUser> boards();

    // sql 문 정의
    @Insert("insert into boardUser(id, title, content, writer, registered) values(#{id}, #{title}, #{content}, #{writer}, #{registered})")
    void createBoard(BoardUserDTO boardUser);

//    @Select("select * from boardUser where title=#{title} or ")
}
