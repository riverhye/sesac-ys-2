package com.sesac.sesacspring.mybatis.mapper;

import com.sesac.sesacspring.mybatis.domain.Board;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> boards();

    void insertBoard(Board board);
    void patchBoard(Board board);
    void deleteBoard(int id);

    List<Board> searchBoard(String word);

}
