package com.sesac.sesacspring.service;

import com.sesac.sesacspring.domain.BoardUser;
import com.sesac.sesacspring.dto.BoardUserDTO;
import com.sesac.sesacspring.mapper.BoardUserMapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardUserService {
    @Autowired
    BoardUserMapper boardUserMapper;

    public List<BoardUserDTO> boards(){
        List<BoardUser> users = boardUserMapper.boards();
        List<BoardUserDTO> userList = new ArrayList<>();

        for (BoardUser user:users) {
            BoardUserDTO boardUserDTO = new BoardUserDTO();
            boardUserDTO.setId(user.getId());
            boardUserDTO.setTitle(user.getTitle());
            boardUserDTO.setContent(user.getContent());
            boardUserDTO.setWriter(user.getWriter());
            boardUserDTO.setRegistered(user.getRegistered());

            userList.add(boardUserDTO);
        }
        return userList;
    }
    public void createBoard(BoardUserDTO boardUser){
        boardUserMapper.createBoard(boardUser);
    }
    public void updateBoard(){}
    public void deleteBoard(BoardUserDTO boardUser){
//        boardUserMapper.deleteBoard(boardUser);
    }

    public void searchBoard(String title){
        boardUserMapper.searchData(title);
    }
}
