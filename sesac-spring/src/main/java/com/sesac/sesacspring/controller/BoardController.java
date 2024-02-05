package com.sesac.sesacspring.controller;

import com.sesac.sesacspring.dto.BoardDTO;
import com.sesac.sesacspring.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class BoardController {
    @Autowired
    BoardService boardService;

    // read
    @GetMapping("/board")
    public String getMain(Model model){
        List<BoardDTO> boardUsers = boardService.boards();
        model.addAttribute("boards", boardUsers);
        return "board";
    }

    // create
    @PostMapping("/board")
    @ResponseBody
    public void getData (@RequestBody BoardDTO boardUser){
        boardService.createBoard(boardUser);
    }

    // delete
    @GetMapping("/board/delete")
    public void deleteBoard(@RequestParam int id){
        boardService.deleteBoard(id);
    }
//
//    // search
//    @GetMapping("/search")
//    public void searchData(
//            @RequestParam String title
//    ){
//        boardService.searchBoard(title);
//    }
//
//    // update
//    @PutMapping("/")
//    public BoardDTO updateData(@RequestBody BoardDTO boardDTO){
//        return  boardDTO;
//    }

}
