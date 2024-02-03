package com.sesac.sesacspring.controller;

import com.sesac.sesacspring.dto.BoardUserDTO;
import com.sesac.sesacspring.service.BoardUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardUserController {
    @Autowired
    BoardUserService boardUserService;

    // read
    @GetMapping("/")
    public String getMain(Model model){
        List<BoardUserDTO> boardUsers = boardUserService.boards();
        model.addAttribute("boards", boardUsers);
        return "board";
    }

    // create
    @PostMapping("/")
    @ResponseBody
    public void getData (@RequestBody BoardUserDTO boardUser){
        boardUserService.createBoard(boardUser);
    }

    // delete
    @DeleteMapping("/")
    public void deleteData(@RequestBody BoardUserDTO boardUser){
        boardUserService.deleteBoard(boardUser);
    }

    // search
    @GetMapping("/search")
    public void searchData(
            @RequestParam String title
    ){
        boardUserService.searchBoard(title);
    }

    // update
}
