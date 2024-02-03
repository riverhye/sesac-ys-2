package controllerApi;

import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@Controller
public class FormController {
    @GetMapping("/form")
    public String getMain(Model model) {
        ArrayList<Integer> years = new ArrayList<>();
        for(int i=1950; i<=2024; i++) {
            years.add(i);
        }
        model.addAttribute("years", years);
        ArrayList<Integer> months = new ArrayList<>();
        for(int i=1; i<=12; i++) {
            months.add(i);
        }
        model.addAttribute("months", months);
        ArrayList<Integer> days = new ArrayList<>();
        for(int i=1; i<=31; i++) {
            days.add(i);
        }
        model.addAttribute("days", days);
        return "form";
    }

    @PostMapping("/user")
    public String getForm(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam int year,
            @RequestParam int month,
            @RequestParam int day,
            @RequestParam(required = false) String[] interest,
            Model model){
                model.addAttribute("name", name);
                model.addAttribute("gender", gender);
                model.addAttribute("year", year);
                model.addAttribute("month", month);
                model.addAttribute("day", day);
                model.addAttribute("interest", interest);
                return "formResult";
    }
    @Getter
    public class InfoForm {
        private String name;
        private String gender;
        private int year;
        private int month;
        private int day;
        private String[] interest;

        public InfoForm(String name, String gender, int year, int month, int day, String[] interest) {
            this.name = name;
            this.gender = gender;
            this.year = year;
            this.month = month;
            this.day = day;
            this.interest = interest;
        }
    }

    @PostMapping("/form")
    @ResponseBody
    public String getAxiosForm(@RequestBody InfoForm2 infoForm){
        return infoForm.getName() + " 회원가입 성공";
    }

    @Getter
    // non-static inner classes like this can only by instantiated using default, no-argument constructor
    public static class InfoForm2 {
        private String name;
        // cannot deserialize from object value
        public InfoForm2() {}
        public InfoForm2(String name) {
            this.name = name;
        }
    }
}

