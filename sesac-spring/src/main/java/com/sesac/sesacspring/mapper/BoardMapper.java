package com.sesac.sesacspring.mapper;

import com.sesac.sesacspring.dto.BoardDTO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<com.sesac.sesacspring.domain.Board> boards();

    // sql 문 정의
    @Insert("insert into boardUser(id, title, content, writer, registered) values(#{id}, #{title}, #{content}, #{writer}, NOW())")
    void createBoard(BoardDTO boardUser);

    @Delete("DELETE FROM boardUser WHERE id=#{id}")
    void deleteBoard(int id);

//    @Select("select * from boardUser where title=#{title}")
//    void searchData(String title);
//
}
