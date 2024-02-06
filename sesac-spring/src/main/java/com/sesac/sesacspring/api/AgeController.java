package com.sesac.sesacspring.api;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AgeController {
    @GetMapping("/age")
    public String getAge(Model model) {
        model.addAttribute("age1", 10);
        model.addAttribute("age2", 21);
        return "age";
    }
}
