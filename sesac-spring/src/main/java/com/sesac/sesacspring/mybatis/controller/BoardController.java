package com.sesac.sesacspring.mybatis.controller;

import com.sesac.sesacspring.mybatis.dto.BoardDTO;
import com.sesac.sesacspring.mybatis.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    BoardService boardService;

    // read
    @GetMapping("")
    public String getBoard(Model model){
        List<BoardDTO> result = boardService.boards();
        model.addAttribute("boards", result);
        return "board";
    }

    // create
    @PostMapping("")
    @ResponseBody
    public boolean insertBoard (@RequestBody BoardDTO boardDTO){
        boardService.insertBoard(boardDTO);
        return true;
    }

    // update
    @PatchMapping("") // ----- FIX : url html 파일과 동일하게 (/ 삭제) (405 err)
    @ResponseBody
    public void patchBoard(@RequestBody BoardDTO boardDTO){
        boardService.patchBoard(boardDTO);
    }

    // delete
    @DeleteMapping("")
    @ResponseBody
    public void deleteBoard(@RequestParam int id){ // ----- FIX : RequestBody -> RequestParam (400 err)
        boardService.deleteBoard(id);
    }

    // search
    @GetMapping("/search")
    @ResponseBody
    // html 파일 보면 개수를 return 하는데 쿼리 스트링으로 word=(숫자) 받아옴
    public int searchBoard(@RequestParam String word){
        return boardService.searchBoard(word);
    }
}