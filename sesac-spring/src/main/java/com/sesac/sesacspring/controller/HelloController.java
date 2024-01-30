package com.sesac.sesacspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
// @Controller : 해당 클래스가 Controller 역할을 하는 클래스임을 Spring Container 에 알려준다.
public class HelloController {

    @GetMapping("/hi")
    // 1. GetMapping : URL 을 매핑시켜줌
    // => 클라이언트가 /hi 라는 경로로 GET method 접근하면 아래 메서드 실행.
    public String getHi(Model model){
        // 3. Model : Controller 안의 메서드가 파라미터로 받을 수 있는 객체 중 하나
        // => Model 안에 정보를 담아서 view 로 전달할 수 있음!
        // ** IoC : 개발자가 직접 모델을 생성 X
        model.addAttribute("name", "홍길동"); // cf. res.render("hi", {name: '홍길동'})
        model.addAttribute("name2", "<strong>코딩온</strong>");

        String[] items = {"a", "b", "c", "d", "e"};
        model.addAttribute("item1", items);

        char[] alphabetArray = new char[26];
        char alphabet = 'A';

        for (int i = 0; i < 26; i++) {
            alphabetArray[i] = alphabet;
            alphabet++;
        }
        model.addAttribute("item2", alphabetArray);
        return "hi"; // 2. 템플릿 파일 이름 return 한 것임
        // 템플릿에 html 없음 : Error resolving template [hi], template might not exist or might not be accessible
        // cf. node 의 res.render("hi")
    }
}
