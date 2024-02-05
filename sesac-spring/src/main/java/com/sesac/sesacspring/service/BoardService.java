package com.sesac.sesacspring.service;

import com.sesac.sesacspring.domain.Board;
import com.sesac.sesacspring.dto.BoardDTO;
import com.sesac.sesacspring.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardMapper boardMapper;

    public List<BoardDTO> boards(){
        List<Board> users = boardMapper.boards();
        List<BoardDTO> userList = new ArrayList<>();

        for (Board user:users) {
            BoardDTO boardUserDTO = new BoardDTO();
            boardUserDTO.setId(user.getId());
            boardUserDTO.setTitle(user.getTitle());
            boardUserDTO.setContent(user.getContent());
            boardUserDTO.setWriter(user.getWriter());
            boardUserDTO.setRegistered(user.getRegistered());

            userList.add(boardUserDTO);
        }
        return userList;
    }
    // create
    public void createBoard(BoardDTO boardUser){
        boardMapper.createBoard(boardUser);
    }
    // delete
    public void deleteBoard(int id){
        boardMapper.deleteBoard(id);
    }

//    // search
//    public void searchBoard(String title){
//        boardMapper.searchData(title);
//    }
}
//    public void updateBoard(){}

