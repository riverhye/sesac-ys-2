package com.sesac.sesacspring.api;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
@Controller
public class PersonController {
    @GetMapping("/people")
    public String getPeople(Model model) {
        ArrayList<Person> people = new ArrayList<>();
        people.add(new Person("kim", 10));
        people.add(new Person("lee", 20));
        people.add(new Person("hong", 30));
        people.add(new Person("park", 40));

        model.addAttribute("people", people);

        // ** lombok 를 인텔리제이에서 인식하게 하려면 플러그인(lombok) 설치

        return "people";
    }

    // 클래스 위에 작성 시 전체 필드
    @Getter
    @Setter
    class Person {
        private String name;
        // 필드 명에 작성 시 특정 필드만
        // @Getter
        // @Setter
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
}