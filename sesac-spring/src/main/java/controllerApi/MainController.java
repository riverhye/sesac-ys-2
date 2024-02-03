package controllerApi;

import controllerApi.dto.UserDTO;
import controllerApi.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
// @RestController // @Controller + @ResponseBody : 요청이 들어오면 응답 반환하는 컨트롤러
public class MainController {
    // === GET ===
    // 1. /test?id=123 -> @RequestParam
    // 2. /test/123 -> @PathVariable
    @GetMapping("/")
    public String getMain() {return "request";}

    @GetMapping("/get/response1")
    // 1-1. ?key=value => @RequestParam
    // - required=true 가 기본값 -> 요청 url 에서 설장한 key 가 필수!
    // Required 가 달라서 400 에러
    // ex. ?name=123&id=11&age=44 (O)
    // ?id=11&hashtag=abc (X, name 키가 없음)
    public String getResponse1(
            @RequestParam(value="name") String i,
            // - string query(? 이후) 에서 key(name) 에 대한 value 를 변수(i) 에 매핑
            Model model){
            // @RequestParam String name, Model model){
        model.addAttribute("name", i);
        return "response";
    }

    @GetMapping("/get/response2")
    // 1-2. required=false 옵션 : (@RequestParam(value="", required=false))
    // - query string 에서 특정 key 를 옵셔널하게 받는 경우
    // ex. 검색 시 검색어(필수), 해시태그(선택)
    // @RequestParam(value="search") String search,
    // @RequestParam(value="hashtag", required=false) String hashtag
    // => ?search=검색어, ?search=검색어&hashtag=코딩
    public String getResponse2(
            @RequestParam(value="name", required = false) String name,
            Model model
    ){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping("/get/response3/{param1}/{param2}")
    // 2. URL 안에 값을 넣을 때 : @PathVariable (즉 url 경로를 변수로 사용함)
    // - 기본적으로 경로 변수의 값을 필수로 받아야 함
    // - param 수를 다르게 받으면 다른 라우터라고 인지해서 404 error (1과 다른 점!)
    // {} 중괄호 안에 변수 선언
    public String getResponse3(
            @PathVariable String param1,
            @PathVariable (value="param2") String age,
            Model model){
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }

    // 2+. pathVariable 보낼 때 선택적으로 처리해야 한다면?
    // - step1. required = false 설정 (400 error 방지)
    // - step2. GetMapping 에 경로 2개 열어줘서 라우터 인지하게끔 (404 error 방지)
    @GetMapping({"/get/response4/{param1}", "/get/response4/{param1}/{param2}"})
    public String getResponse4(
            @PathVariable String param1,
            @PathVariable (required = false, value="param2") String age,
            Model model){
        // 중요!! optional parameter 는 맨뒤에 오도록 설정
        model.addAttribute("name", param1);
        model.addAttribute("age", age);
        return "response";
    }

    // Post 방식도 @RequestParam
    @PostMapping("/post/response1")
    public String postResponse1(
            @RequestParam(value="name") String a,
            @RequestParam(value="age") String b,
            Model model
    ){
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(
            @RequestParam(value="name", required = false) String a,
            @RequestParam(value="age", required = false) String b,
            Model model
    ){
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        return "response";
    }

    // @ResponseBody
    // - 직렬화 : 응답 시 객체를 json 형태로 리턴
    // - express res.send 와 유사
    @PostMapping("/post/response3")
    @ResponseBody
    // 매번 하기 귀찮을 땐 @RestController (단, 모두 요청 응답일 시)
    public String postResponse3(
            @RequestParam(value="name", required = false) String a,
            @RequestParam(value="age", required = false) String b,
            Model model
    ){
        model.addAttribute("name", a);
        model.addAttribute("age", b);
        return a + " - " + b;
    }

    // ======================= 일반폼전송 DTO =======================
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoResponse1(@ModelAttribute UserDTO userDTO){
        // DTO : getter/setter 있는 객체
        // GET 방식에서 DTO 객체로 담아서 값이 받아진다.
        // @ModelAttribute : HTML 폼 데이터를 컨트롤러로 전달할 때 객체에 매핑(setter 함수 실행)
        // ?name=홍길동&age=10 -> setName("홍길동") setAge("10")
        return userDTO.getName() + " " + userDTO.getAge();
    }

    @GetMapping("/dto/response11")
    @ResponseBody
    // @RequestBody: 요청 본문에 있는 데이터(body)를 받음
    public String dtoResponse11(@RequestBody UserDTO userDTO){
        return userDTO.getName() + " " + userDTO.getAge();
    }

    // 일반 폼전송 DTO(getter, setter 모두 있음)
    // 1. 어노테이션 없이 DTO 로 받음 -> OK
    // 2. @ModelAttribute DTO 로 받음 -> OK
    // 3. @RequestBOdy DTO 로 받음 -> 400 error!

    // 왜 에러가 뜰까?
    // fetch, axios 는 appliccation/json 형식
    // BUT 일반 폼전송은 WWW-x-form-urlencoded 형식 (쿼리 매개변수)
    // (폼 파일 받을 때 <form enctype="multipart/~~"> 작업이 필요하듯)
    // RequestBody 는 요청 본문에 있는 데이터(body)를 처리할 수 있어서 json, xml 만 가능

    // 즉 일반 폼 전송은 WWW-x-form-urlencoded 형식이라서
    // get 이든 post 든 요청 본문에 데이터가 들어가는 게 아니라, 폼 데이터 형태로 url 데이터가 전송

    // ========================= 일반폼전송 VO =========================
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voResponse1(UserVO userVO){
        return userVO.getName() + " " + userVO.getAge();
    } // => null (get, @ModelAttribute)

    @PostMapping("/vo/response2")
    @ResponseBody
    public String voResponse2(UserVO userVO){
        return userVO.getName() + " " + userVO.getAge();
    } // => null (post, @ModelAttribute)

    @PostMapping("/vo/response3")
    @ResponseBody
    public String voResponse3(@RequestBody UserVO userVO){
        return userVO.getName() + " " + userVO.getAge();
    }// => error! (post, @RequestBody)

    // 이제부턴 application/json 형태
    // =============================== DTO with. axios ===============================
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosResponse1(@RequestParam String name, @RequestParam String age){
        return name + " " + age;
    }
    // 1. Axios + get + @RequestParam -> OK

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosResponse2(UserDTO userDTO){
        return userDTO.getName() + " " + userDTO.getAge();
    }
    // 2. Axios + get + @ResponseBody -> OK

    @PostMapping("/axios/response3")
    @ResponseBody
    // @RequestParam 은 url 에 담기는데 axios post 는 url 에 데이터 존재하지 않음
    // 아무것도 없는 url 에 name, age 가 require=true 라서 에러 발생
    public String axiosRes3(@RequestParam String name, @RequestParam String age){
        return "이름: " + name + ", 나이: "+ age;
    } // => error
    // 3. post + @RequestParam

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosRes4(UserDTO userDTO){
        return "이름:" + userDTO.getName() + ", 나이: "+ userDTO.getAge();
    } // => null
    // axios 는 본문으로 데이터를 보내게 되어 url 을 읽는 @ModelAttribute 는 값을 볼 수 없음 => null
    // 4. post + @ModelAttribute

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosRes5(@RequestBody UserDTO userDTO){
        return "이름:" + userDTO.getName() + ", 나이: "+ userDTO.getAge();
    } // => ok
    // 5. post + @RequestBody

    // ============================== VO with. axios ================================
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVoRes1(@RequestParam String name, @RequestParam String age) {
        return "이름: " + name + ", 나이: " + age;
    }
    // 1. get + @RequestParam

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoRes2(UserVO userVO) {
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    }
    // 2. get + @ModelAttribute

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVoRes3(@RequestParam String name, @RequestParam String age) {
        return "이름: " + name + ", 나이: " + age;
    }
    // 3. post + @RequestParam

    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoRes4(UserVO userVO){
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    }
    // 4. post + @ModelAttribute

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoRes5(@RequestBody UserVO userVO){
        // axios post 요청 -> body 에 데이터가 들어감
        // @RequestBody 는 요청 본문의 데이터를 읽을 수 있음
        // UserVO 클래스는 setter 메서드가 없는데?
        // => @RequestBody 는 데이터를 각각의 필드(변수) 에 직접 값을 주입해서 (필드 자체의 set 함수 이용)
        // UserVO UserDTO 상관없이 (setter 메서드 무관하게) 변수에 값 넣을 수 있다
        return "이름: "+ userVO.getName() + ", 나이: "+ userVO.getAge();
    }
}