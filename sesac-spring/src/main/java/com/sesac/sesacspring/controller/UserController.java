package com.sesac.sesacspring.controller;

import com.sesac.sesacspring.dto.UserDTO1;
import com.sesac.sesacspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// MyBatis
@RestController
@RequestMapping("/user") // 미들웨어처럼 엔트리 url
public class UserController {
    // C, R
    // 1. 테이블 생성 (user)
    // 2. domain 만들기 (domain/user)
    // 3. mapper 만들기
    // 4. service 만들기
    // 5. controller 만들기

    @Autowired
    UserService userService;

    @GetMapping("/all") // /user/all
    public List<UserDTO1> getUser(){
        List<UserDTO1> result = userService.retrieveAll();
        return result;
    }

    @GetMapping("/user") // /user/user
    public String getUserInsert(
            @RequestParam String name,
            @RequestParam String nickname){
        userService.createUser(name, nickname);
        return "Success";
    }

    @GetMapping("/update") //user/update
    public String getUserUpdate(
            @RequestParam int id,
            @RequestParam String nickname){
        userService.updateUser(id, nickname);
        return "Updated";
    }

    @GetMapping("/delete") // /user/delete
    public String deleteUser(
            @RequestParam int id
    ){
        userService.deleteUser(id);
        return "deleted";
    }
}