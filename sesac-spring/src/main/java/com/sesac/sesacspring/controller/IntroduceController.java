package com.sesac.sesacspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IntroduceController {
    @GetMapping("/introduce/{name}")
    public String getInfo(
            @PathVariable String name,
            Model model){
        model.addAttribute("name", name);
        return "introduce";
    }

    @GetMapping("/introduce2")
    public String getInfos(
            @RequestParam String name,
            @RequestParam (required = false, value="age") int age,
            Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "introduce";
    }
}
