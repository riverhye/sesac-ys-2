package com.sesac.sesacspring.mybatis.service;

import com.sesac.sesacspring.mybatis.domain.Board;
import com.sesac.sesacspring.mybatis.dto.BoardDTO;
import com.sesac.sesacspring.mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardMapper boardMapper;

    public List<BoardDTO> boards(){
        List<Board> result = boardMapper.boards();
        List<BoardDTO> boards = new ArrayList<>();

        for (Board board:result) {
            BoardDTO boardDTO = new BoardDTO();
            boardDTO.setId(board.getId());
            boardDTO.setTitle(board.getTitle());
            boardDTO.setContent(board.getContent());
            boardDTO.setWriter(board.getWriter());
            boardDTO.setRegistered(board.getRegistered());
            boardDTO.setNo(100 + board.getId());
            boards.add(boardDTO);
        }
        return boards;
    }
    // create
    // mapper 는 도메인으로 작성해서 DB에 저장함
    public void insertBoard(BoardDTO boardDTO){
        Board board = new Board();
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());
        boardMapper.insertBoard(board);
    }
    // delete
    public void deleteBoard(int id){
        boardMapper.deleteBoard(id);
    }

    // patch
    public void patchBoard(BoardDTO boardDTO){
        Board board = new Board();
        board.setId(boardDTO.getId()); // ----- FIX : id 값 변경 후 mapper 에 전달
        board.setTitle(boardDTO.getTitle());
        board.setContent(boardDTO.getContent());
        board.setWriter(boardDTO.getWriter());
        boardMapper.patchBoard(board);
    }
    // search
    public int searchBoard(String word){
        List<Board> result = boardMapper.searchBoard(word);
        return result.size();
    }
}


