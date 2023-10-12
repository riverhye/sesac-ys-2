// [1] PORT
// port number : 1 ~ 65536 but 1 ~ 1023까지 정해진 기능(연결된 통신) 있음.
// 3000와 8000대를 주로 사용 8010, 3010, 3001
// 3306 : mysql에서 사용

const express = require("express"); // import express module
const app = express(); // server 객체
const PORT = 8000; // port

// [+] set 메서드 : server 객체를 설정하는 메서드
// 'app객체의 view engine 설정을 ejs로 변경'
app.set("view engine", "ejs")
// app 객체의 view 폴더 설정
// 기본값 : ./views
// app.set("views", "./views")
// 값 변경 시 아래처럼 작성
// app.set("views", "./view")


// 미들웨어
// local이 아닌 서버를 구축해 클라이언트를 통해 사용자에게 보여줄 때, 해당 파일을 참조할 수 있도록 허락해 주어야 한다.
app.use('/static', express.static(__dirname + "/static"));
// ~절대주소~/01-express/static에 클라이언트가 /static이라는 이름으로 들어올 수 있음.
// 그래서 앞부분의 이름은 다른 것으로 변경 가능

// app.use('/public', express.static(__dirname + "/static"));
// ~절대주소~/01-express/static에 클라이언트가 /public이라는 이름으로 들어올 수 있음.


// [2] get 메서드(http 메서드 중 하나) : 클라이언트가 요청할 수 있는 방법 정의
// localhost:8000/에 대한 get 요청을 받겠다. 즉 '저 주소를 타고 브라우저로 접속하겠다.'
app.get("/", function (req, res) {
    // send : 값을 보냄
    // 'hello express 문자열을 응답으로 전송하겠다.'
  res.send("hello express");
});
app.get("/test", function (req, res) {
    // res.send("<div style='color:red'>Hello World</div>");
    console.log(__dirname);
    // node에서는 상대경로로 파일 접근 불가 (단, 모듈에 관한 것은 가능)
    // res.sendFile("./index.html") // 오류
    res.sendFile(__dirname + "/index.html");
});
// http 메서드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수 : request 객체 (요청 객체)
// 두번째 매개변수 : response 객체 (응답 객체)

// localhost:8000/ejs
app.get("/ejs", function(req, res) {
    // render 메서드의 기본 directroy는 "./views"
    // res.render("index"); //바로 하위에 있으므로 그냥 파일명만 입력(ejs 엔진 설정했으므로 확장자 없어도 ok)
    res.render("test/index"); // 하위 폴더의 파일명으로 입력
})

app.get("/une", function(req, res) {
  // 백에서 프론트로 정보 전달
  // 'name이라는 변수로 une 파일 보내기'
    res.render("une", {
      name: "une",
      product: ["Sneakers", "Zipup", "Sweater"]
    });
})

// [3] server 객체를 이용해 실제 접속 가능케하려면 listen 메서드 사용
// '어떤 포트로 서버를 열어서 무슨 동작을 할지'
// localhost:8000 or 127.0.0.1:8000으로 접속
app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});

// [4] 서버를 열었던 때에 정의한 대로 보여지기 때문에 내용을 바꾸고 새로고침 해도 변화 없다.
// 서버를 껐다 새로 켜야 함.
